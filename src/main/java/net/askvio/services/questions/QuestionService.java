package net.askvio.services.questions;

import java.time.Instant;
import java.util.Objects;
import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.controllers.questions.dto.QuestionResponse;
import net.askvio.controllers.questions.dto.SubmitQuestionRequest;
import net.askvio.database.CommunityRepository;
import net.askvio.database.QuestionRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.model.Community;
import net.askvio.model.Question;
import net.askvio.model.UserAccount;
import net.askvio.services.account.UserAccountService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class QuestionService {

    private final QuestionTitleNormalizer questionTitleNormalizer;
    private final UserAccountService userAccountService;

    private final UserAccountRepository userAccountRepository;
    private final QuestionRepository questionRepository;
    private final CommunityRepository communityRepository;

    @Value("${react-app.url}")
    private String reactAppUrl;

    public Optional<QuestionResponse> submitQuestion(SubmitQuestionRequest request, Authentication authentication) {
        Optional<UserAccount> principalAccount = userAccountService.getPrincipalUserAccount(authentication);
        if (principalAccount.isEmpty()) {
            return Optional.empty();
        }

        Optional<Community> community = communityRepository.findById(request.communityId());
        if (community.isEmpty()) {
            return Optional.empty();
        }

        Question submittedQuestion = new Question(null, request.title(),
                request.content(), Instant.now(), 0, principalAccount.get(), community.get());
        submittedQuestion = questionRepository.save(submittedQuestion);

        return Optional.of(new QuestionResponse(
                submittedQuestion.getId(),
                submittedQuestion.getTitle(),
                submittedQuestion.getContent(),
                submittedQuestion.getCreationDate(),
                userAccountRepository.findUserResponseDTOByEmail(principalAccount.get().getEmail()).orElseThrow(),
                communityRepository.findCommunityById(request.communityId()).orElseThrow(),
                generateQuestionLink(submittedQuestion.getId(), submittedQuestion.getTitle())
        ));
    }

    public String generateQuestionLink(Long questionId, String questionTitle) {
        Objects.requireNonNull(questionId);
        Objects.requireNonNull(questionTitle);

        return "%s/questions/%d/%s".formatted(reactAppUrl, questionId, questionTitleNormalizer.normalize(questionTitle));
    }
}

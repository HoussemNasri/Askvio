package net.askvio.services.answers;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import net.askvio.controllers.account.dto.UserResponse;
import net.askvio.controllers.answers.dto.AnswerResponse;
import net.askvio.controllers.answers.dto.PostAnswerRequest;
import net.askvio.database.AnswerRepository;
import net.askvio.database.QuestionRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.Answer;
import net.askvio.model.Question;
import net.askvio.model.UserAccount;
import net.askvio.services.account.UserAccountService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswersService {
    private final UserAccountRepository userAccountRepository;
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final UserAccountService userAccountService;
    @Value("${react-app.url}")
    private String reactAppUrl;

    public Optional<AnswerResponse> getAnswerById(Long id) {
        return answerRepository.findById(id).map(this::mapAnswerToAnswerResponse);
    }

    public List<AnswerResponse> getAnswersOnQuestion(Long questionId) {
        return answerRepository.getAnswersOnQuestion(questionId).stream().map(this::mapAnswerToAnswerResponse).toList();
    }

    public Optional<AnswerResponse> postAnswer(PostAnswerRequest answerRequest, Long questionId, Authentication authentication) {
        Optional<UserAccount> principalAccountOpt = userAccountService.getPrincipalUserAccount(authentication);
        if (principalAccountOpt.isEmpty()) {
            return Optional.empty();
        }

        Optional<Question> questionOpt = questionRepository.findById(questionId);
        if (questionOpt.isEmpty()) {
            return Optional.empty();
        }

        Answer answer = new Answer(null, answerRequest.content(), Instant.now(), 0, false,
                principalAccountOpt.get(), questionOpt.get());
        answer = answerRepository.save(answer);

        return Optional.of(mapAnswerToAnswerResponse(answer));
    }

    private UserResponse lookupOwner(Answer answer) {
        return userAccountRepository.findUserResponseDTOById(answer.getOwner().getId()).orElseThrow();
    }

    public AnswerResponse mapAnswerToAnswerResponse(Answer answer) {
        return new AnswerResponse(
                answer.getId(),
                answer.getContent(),
                answer.getCreationDate(),
                answer.getVoteCount(),
                lookupOwner(answer),
                answer.getQuestion().getId(),
                answer.isAccepted(),
                generateAnswerLink(answer.getId(), answer.getQuestion().getId()));
    }

    private String generateAnswerLink(Long answerId, Long questionId) {
        return "%s/a/%d/%d".formatted(reactAppUrl, answerId, questionId);
    }
}

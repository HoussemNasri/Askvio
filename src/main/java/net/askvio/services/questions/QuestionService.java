package net.askvio.services.questions;

import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import net.askvio.controllers.account.dto.UserResponse;
import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.controllers.questions.dto.QuestionResponse;
import net.askvio.controllers.questions.dto.SubmitQuestionRequest;
import net.askvio.database.AnswerRepository;
import net.askvio.database.CommunityRepository;
import net.askvio.database.QuestionRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.database.VoteRepository;
import net.askvio.model.Community;
import net.askvio.model.Question;
import net.askvio.model.UserAccount;
import net.askvio.services.account.UserAccountService;
import net.askvio.services.votes.VoteService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
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
    private final AnswerRepository answerRepository;
    private final VoteRepository voteRepository;
    private final VoteService voteService;

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
                request.content(), Instant.now(), principalAccount.get(), community.get());
        submittedQuestion = questionRepository.save(submittedQuestion);

        return Optional.of(new QuestionResponse(
                submittedQuestion.getId(),
                submittedQuestion.getTitle(),
                submittedQuestion.getContent(),
                submittedQuestion.getCreationDate(),
                0, 0,
                userAccountRepository.findUserResponseDTOByEmail(principalAccount.get().getEmail()).orElseThrow(),
                communityRepository.findCommunityById(request.communityId()).orElseThrow(),
                generateQuestionLink(community.get().getName(), submittedQuestion.getId(), submittedQuestion.getTitle()),
                false,
                false
        ));
    }

    public Optional<QuestionResponse> getQuestionById(Long id) {
        return questionRepository.findById(id)
                                 .map(this::mapQuestionToQuestionResponse);
    }

    private CommunityResponse lookupCommunity(Question question) {
        return communityRepository.findCommunityById(question.getAskedAtCommunity().getId()).orElseThrow();
    }

    private UserResponse lookupOwner(Question question) {
        return userAccountRepository.findUserResponseDTOById(question.getOwner().getId()).orElseThrow();
    }

    public QuestionResponse mapQuestionToQuestionResponse(Question question) {
        return new QuestionResponse(
                question.getId(),
                question.getTitle(),
                question.getContent(),
                question.getCreationDate(),
                voteRepository.getPostTotalVote(question.getId()),
                answerRepository.countByQuestion(question),
                lookupOwner(question),
                lookupCommunity(question),
                // TODO: Optimization - Store question link in the database so we don't generate the url
                //    everytime the question is accessed
                generateQuestionLink(question.getAskedAtCommunity().getName(), question.getId(), question.getTitle()),
                voteService.isPostDownvotedByPrincipalUser(question),
                voteService.isPostUpvotedByPrincipalUser(question));
    }

    public List<QuestionResponse> getQuestionsAskedAtCommunity(String community) {
        // TODO: Remove the limit on the number of returned questions. I don't know when though...
        return questionRepository.getQuestionsAskedAtCommunity(community, Pageable.ofSize(10))
                       .stream().map(this::mapQuestionToQuestionResponse)
                       .toList();
    }

    public String generateQuestionLink(String communityName, Long questionId, String questionTitle) {
        Objects.requireNonNull(questionId);
        Objects.requireNonNull(questionTitle);

        return "%s/c/%s/questions/%d/%s".formatted(reactAppUrl, communityName, questionId, questionTitleNormalizer.normalize(questionTitle));
    }
}

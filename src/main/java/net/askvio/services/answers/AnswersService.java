package net.askvio.services.answers;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import net.askvio.controllers.account.dto.UserResponse;
import net.askvio.controllers.answers.dto.AnswerResponse;
import net.askvio.database.AnswerRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.Answer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswersService {
    private final UserAccountRepository userAccountRepository;
    private final AnswerRepository answerRepository;
    @Value("${react-app.url}")
    private String reactAppUrl;

    public Optional<AnswerResponse> getAnswerById(Long id) {
        return answerRepository.findById(id).map(this::mapAnswerToAnswerResponse);
    }

    public List<AnswerResponse> getAnswersOnQuestion(Long questionId) {
        return answerRepository.getAnswersOnQuestion(questionId).stream().map(this::mapAnswerToAnswerResponse).toList();
    }

    private UserResponse lookupOwner(Answer answer) {
        return userAccountRepository.findUserResponseDTOById(answer.getAnswererAccount().getId()).orElseThrow();
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

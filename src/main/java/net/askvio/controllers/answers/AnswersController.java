package net.askvio.controllers.answers;

import java.util.Collections;
import java.util.List;

import lombok.AllArgsConstructor;
import net.askvio.controllers.answers.dto.AnswerResponse;
import net.askvio.controllers.answers.dto.PostAnswerRequest;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.services.answers.AnswersService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class AnswersController {
    private final AnswersService answersService;

    /**
     * Get all answers on the site.
     */
    @GetMapping("/answers")
    public List<AnswerResponse> getAnswers() {
        return Collections.emptyList();
    }

    /**
     * Get the answers to question with id {@code questionId}
     */
    @GetMapping("/questions/{questionId}/answers")
    public List<AnswerResponse> getAnswersOnQuestion(@PathVariable Long questionId) {
        return answersService.getAnswersOnQuestion(questionId);
    }

    /**
     * Posts an answer to question with id {@code questionId}
     */
    @PostMapping("/questions/{questionId}/answers")
    public ResponseEntity<AnswerResponse> postAnswer(@RequestBody PostAnswerRequest answerRequest, @PathVariable Long questionId,
                                                     Authentication authentication) {
        return answersService.postAnswer(answerRequest, questionId, authentication)
                             .map(ResponseEntity::ok)
                             .orElse(ResponseEntity.badRequest().build());
    }

    @GetMapping("/answers/{answerId}")
    public ResponseEntity<AnswerResponse> getAnswer(@PathVariable Long answerId) {
        return answersService.getAnswerById(answerId)
                             .map(ResponseEntity::ok)
                             .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Accepts an answer.
     */
    @PostMapping("/answers/{answerId}")
    public AnswerResponse acceptAnswer(@PathVariable Long answerId, Authentication authentication) {
        throw new NotImplementedException();
    }
}

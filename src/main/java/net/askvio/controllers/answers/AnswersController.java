package net.askvio.controllers.answers;

import java.util.Collections;
import java.util.List;

import net.askvio.controllers.answers.dto.AnswerResponse;
import net.askvio.exceptions.NotImplementedException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class AnswersController {

    /**
     * Get all answers on the site.
     */
    @GetMapping("/answers")
    public List<AnswerResponse> getAnswers() {
        return Collections.emptyList();
    }

    /**
     Get the answers to question with id {@code questionId}
     * */
    @GetMapping("/questions/{questionId}/answers")
    public List<AnswerResponse> getAnswersOnQuestion(@PathVariable Long questionId) {
        return Collections.emptyList();
    }

    @GetMapping("/answers/{answerId}")
    public AnswerResponse getAnswer(@PathVariable Long answerId) {
        throw new NotImplementedException();
    }

    /**
     * Accepts an answer.
     * */
    @PostMapping("/answers/{answerId}")
    public AnswerResponse acceptAnswer(@PathVariable Long answerId, Authentication authentication) {
        throw new NotImplementedException();
    }
}

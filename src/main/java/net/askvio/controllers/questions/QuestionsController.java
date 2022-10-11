package net.askvio.controllers.questions;

import lombok.AllArgsConstructor;
import net.askvio.controllers.questions.dto.QuestionResponse;
import net.askvio.controllers.questions.dto.SubmitQuestionRequest;
import net.askvio.services.questions.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/questions")
public class QuestionsController {

    private final QuestionService questionService;

    @PostMapping
    public ResponseEntity<QuestionResponse> submitQuestion(@RequestBody SubmitQuestionRequest submitQuestionRequest, Authentication authentication) {
        return questionService.submitQuestion(submitQuestionRequest, authentication)
                              .map(ResponseEntity::ok)
                              .orElse(ResponseEntity.badRequest().build());
    }
}

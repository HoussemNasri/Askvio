package net.askvio.controllers.questions;

import lombok.AllArgsConstructor;
import net.askvio.controllers.questions.dto.QuestionResponse;
import net.askvio.controllers.questions.dto.SubmitQuestionRequest;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.services.questions.QuestionService;
import net.askvio.services.votes.VoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/questions")
public class QuestionsController {

    private final QuestionService questionService;
    private final VoteService voteService;

    @PostMapping
    public ResponseEntity<QuestionResponse> submitQuestion(@RequestBody SubmitQuestionRequest submitQuestionRequest, Authentication authentication) {
        return questionService.submitQuestion(submitQuestionRequest, authentication)
                              .map(ResponseEntity::ok)
                              .orElse(ResponseEntity.badRequest().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionResponse> getQuestionById(@PathVariable Long id) {
        return questionService.getQuestionById(id)
                              .map(ResponseEntity::ok)
                              .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{questionId}/upvote")
    public ResponseEntity<?> upvote(@PathVariable Long questionId, Authentication authentication) {
        boolean succeed = voteService.upvote(questionId);
        if (succeed) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/{questionId}/downvote")
    public ResponseEntity<?> downvote(@PathVariable Long questionId, Authentication authentication) {
        boolean succeed = voteService.downvote(questionId);
        if (succeed) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/{questionId}/upvote/undo")
    public ResponseEntity<?> undoUpvote(@PathVariable Long questionId, Authentication authentication) {
        throw new NotImplementedException();
    }

    @PostMapping("/{questionId}/downvite/undo")
    public ResponseEntity<?> undoDownvote(@PathVariable Long questionId, Authentication authentication) {
        throw new NotImplementedException();
    }
}

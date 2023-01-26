package net.askvio.services.feed;

import java.util.List;

import lombok.AllArgsConstructor;
import net.askvio.controllers.questions.dto.QuestionResponse;
import net.askvio.database.QuestionRepository;
import net.askvio.services.questions.QuestionService;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FeedService {

    private final QuestionRepository questionRepository;
    private final QuestionService questionService;

    /*
     * Normally feed should be constructed dynamically based to user preferences, history, interactions, etc.
     * However, for testing purposes, we are serving a static feed to all users
     * */
    public List<QuestionResponse> getFeed() {
        return questionRepository.generateFeed(Pageable.ofSize(25))
                                 .stream().map(questionService::mapQuestionToQuestionResponse)
                                 .toList();
    }
}

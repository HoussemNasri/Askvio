package net.askvio.controllers.feed;

import java.util.List;

import lombok.AllArgsConstructor;
import net.askvio.controllers.questions.dto.QuestionResponse;
import net.askvio.services.feed.FeedService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/feed")
@AllArgsConstructor
public class FeedController {

    private FeedService feedService;

    @GetMapping
    public FeedResponse getFeed() {
        return new FeedResponse(feedService.getFeed());
    }
}

package net.askvio.controllers.feed;

import lombok.AllArgsConstructor;
import net.askvio.services.feed.FeedService;
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

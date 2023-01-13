package net.askvio.controllers.feed;

import java.util.Collections;
import java.util.List;

import lombok.Getter;
import lombok.ToString;
import net.askvio.controllers.questions.dto.QuestionResponse;

@Getter
@ToString
public class FeedResponse {
    private final Long total;
    private final List<QuestionResponse> feed;

    public FeedResponse(List<QuestionResponse> feed) {
        this.feed = Collections.unmodifiableList(feed);
        this.total = (long) feed.size();
    }
}

package net.askvio.controllers.communities;

import java.time.Instant;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Value;


public interface CommunityResponse {
    Long getId();

    String getName();

    String getDisplayName();

    String getAbout();

    @Value("#{target.primaryTopic.getDisplayName()}")
    String getPrimaryTopic();

    @Value("#{target.getSubtopicsDisplayNames()}")
    Set<String> getSubtopics();

    @Value("#{target.isPublic()}")
    @JsonProperty("isPublic")
    boolean isPublic();

    @Value("#{target.isPrivate()}")
    @JsonProperty("isPrivate")
    boolean isPrivate();

    @Value("#{target.isRestricted()}")
    @JsonProperty("isRestricted")
    boolean isRestricted();

    Instant getCreationDate();
}

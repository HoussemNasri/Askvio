package net.askvio.controllers.communities;

import java.util.Collections;
import java.util.Set;

/**
 * A mock implementation to be able to create instance of {@link CommunityResponse} for testing
 * TODO: Move to /test package
 */
public class SimpleCommunityResponse implements CommunityResponse {
    private final Long id;
    private final String name;
    private final String displayName;
    private final String about;
    private final String primaryTopic;
    private final Set<String> subtopics;
    private final boolean isPublic;
    private final boolean isPrivate;
    private final boolean isRestricted;

    public SimpleCommunityResponse(Long id, String name, String displayName, String about, String primaryTopic, Set<String> subtopics, boolean isPublic, boolean isPrivate, boolean isRestricted) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.about = about;
        this.primaryTopic = primaryTopic;
        this.subtopics = subtopics;
        this.isPublic = isPublic;
        this.isPrivate = isPrivate;
        this.isRestricted = isRestricted;
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getDisplayName() {
        return displayName;
    }

    @Override
    public String getAbout() {
        return about;
    }

    @Override
    public String getPrimaryTopic() {
        return primaryTopic;
    }

    @Override
    public Set<String> getSubtopics() {
        return Collections.unmodifiableSet(subtopics);
    }

    @Override
    public boolean isPublic() {
        return isPublic;
    }

    @Override
    public boolean isPrivate() {
        return isPrivate;
    }

    @Override
    public boolean isRestricted() {
        return isRestricted;
    }
}

package net.askvio.model;

import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CommunityType type;

    @Column(unique = true)
    private String name;
    private String displayName;

    private String about;

    @Enumerated(EnumType.STRING)
    private Topic primaryTopic;

    @CollectionTable(name = "subtopic")
    @ElementCollection(targetClass = Topic.class)
    @Enumerated(EnumType.STRING)
    @Column(name = "topic")
    private Set<Topic> subtopicSet;


    public String getDisplayName() {
        return displayName;
    }

    public boolean isPublic() {
        return type == CommunityType.PUBLIC;
    }

    public boolean isPrivate() {
        return type == CommunityType.PRIVATE;
    }

    public boolean isRestricted() {
        return type == CommunityType.RESTRICTED;
    }

}

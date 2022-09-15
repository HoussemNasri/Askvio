package net.askvio.model;

import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "community")
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

    @ManyToMany
    @JoinTable(name = "community_members",
            joinColumns = { @JoinColumn(name = "community_id") },
            inverseJoinColumns = { @JoinColumn(name = "member_id") })
    private Set<UserAccount> members;


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

    public Set<String> getSubtopicsDisplayNames() {
        return getSubtopicSet().stream().map(Topic::getDisplayName).collect(Collectors.toSet());
    }

}

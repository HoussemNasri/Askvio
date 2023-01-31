package net.askvio.model;

import java.time.Instant;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Question extends Post {
    @NotBlank
    private String title;
    @ManyToOne
    @JoinColumn(name = "asked_at_community_id")
    private Community askedAtCommunity;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
    private List<Answer> answers;

    public Question(Long id, String title, String content, Instant creationDate, UserAccount owner, Community community) {
        super(id, owner, creationDate, content);
        this.title = title;
        this.askedAtCommunity = community;
    }
}

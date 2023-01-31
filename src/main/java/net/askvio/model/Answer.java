package net.askvio.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Answer extends Post {
    private boolean isAccepted;
    @ManyToOne(fetch = FetchType.LAZY)
    private Question question;

    public Answer(Long id, String content, Instant creationDate, Boolean isAccepted, UserAccount owner, Question question) {
        super(id, owner, creationDate, content);
        this.isAccepted = isAccepted;
        this.question = question;
    }
}

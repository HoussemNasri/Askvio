package net.askvio.model;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(length = 30_000)
    private String content;
    private Instant creationDate;
    private Integer voteCount;
    private boolean isAccepted;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "answerer_account_id")
    private UserAccount answererAccount;

    @ManyToOne(fetch = FetchType.LAZY)
    private Question question;
}

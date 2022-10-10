package net.askvio.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotBlank
    private String title;

    private String content;

    // TODO: Distinguish between creation date and submission date as a question is not guaranteed
    //  to be accepted and thus created right away after submission
    private Instant creationDate;

    // If the world population (7.753 billion) or even half of them decided all to upvote or downvote
    // a question we're f***** up.
    private Integer voteCount;

    @ManyToOne
    @JoinColumn(name = "asker_account_id")
    private UserAccount askerAccount;


    @ManyToOne
    @JoinColumn(name = "asked_at_community_id")
    private Community askedAtCommunity;
}

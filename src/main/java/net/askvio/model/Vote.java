package net.askvio.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Vote {
    @EmbeddedId
    private VoteId id;
    @JoinColumn(name = "post_id")
    @MapsId("postId")
    @ManyToOne
    private Post post;
    @JoinColumn(name = "user_id")
    @MapsId("userAccountId")
    @ManyToOne
    private UserAccount userAccount;

    private VoteType voteType;
}

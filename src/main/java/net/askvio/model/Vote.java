package net.askvio.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Vote {
    @EmbeddedId
    private VoteId id;
    @JoinColumn(name = "post_id")
    @MapsId("postId")
    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;
    @JoinColumn(name = "user_id")
    @MapsId("userAccountId")
    @ManyToOne(fetch = FetchType.LAZY)
    private UserAccount userAccount;

    private VoteType voteType;

    public Vote(Post post, UserAccount userAccount, VoteType voteType) {
        this.post = post;
        this.userAccount = userAccount;
        this.voteType = voteType;
        this.id = new VoteId(post.getId(), userAccount.getId());
    }
}

package net.askvio.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class VoteId implements Serializable {
    @Column(name = "post_id")
    private Long postId;
    @Column(name = "user_id")
    private Long userAccountId;
}

package net.askvio.database;

import java.util.Optional;

import net.askvio.model.Vote;
import net.askvio.model.VoteId;
import net.askvio.model.VoteType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VoteRepository extends JpaRepository<Vote, VoteId> {
    @Query(value = "SELECT IFNULL(SUM(vote_type), 0) FROM vote WHERE post_id = :postId", nativeQuery = true)
    Integer getPostTotalVote(@Param("postId") Long postId);

    @Query(value = "SELECT COUNT(*) FROM vote WHERE vote_type = 1 AND post_id = :postId", nativeQuery = true)
    Integer getPostUpvotesCount(@Param("postId") Long postId);

    @Query(value = "SELECT COUNT(*) FROM vote WHERE vote_type = -1 AND post_id = :postId", nativeQuery = true)
    Integer getPostDownvotesCount(@Param("postId") Long postId);

    @Query("SELECT v.voteType FROM Vote v WHERE v.post.id = :postId AND v.userAccount.id = :userId")
    Optional<VoteType> getUserVoteOnPost(@Param("userId") Long userId, @Param("postId") Long postId);

    @Modifying
    @Query("DELETE FROM Vote v WHERE v.userAccount.id = :userId AND v.post.id = :postId")
    void deleteUserVoteOnPost(@Param("userId") Long userId, @Param("postId") Long postId);
}

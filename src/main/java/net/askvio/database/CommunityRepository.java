package net.askvio.database;

import java.util.List;
import java.util.Optional;

import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.model.Community;
import net.askvio.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    Optional<CommunityResponse> findCommunityById(Long id);

    List<CommunityResponse> findCommunityResponseBy();

    @Query("SELECT CASE WHEN (count(c) > 0) THEN true ELSE false END FROM Community c JOIN c.members m WHERE c.id = :communityId AND :user = m")
    boolean isUserMemberOfCommunity(UserAccount user, Long communityId);
}

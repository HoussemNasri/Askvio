package net.askvio.database;

import java.util.List;
import java.util.Optional;

import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.model.Community;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    Optional<CommunityResponse> findCommunityById(Long id);

    List<CommunityResponse> findCommunityResponseBy();
}

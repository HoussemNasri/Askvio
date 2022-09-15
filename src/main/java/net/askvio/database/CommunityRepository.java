package net.askvio.database;

import java.util.Optional;

import net.askvio.controllers.CommunityResponse;
import net.askvio.model.Community;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    Optional<CommunityResponse> findCommunityById(Long id);
}

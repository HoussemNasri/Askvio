package net.askvio.services;

import java.util.Objects;
import java.util.Optional;

import lombok.AllArgsConstructor;
import net.askvio.controllers.CommunityResponse;
import net.askvio.database.CommunityRepository;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CommunityService {

    private final CommunityRepository communityRepository;

    public Optional<CommunityResponse> getCommunity(Long id) {
        Objects.requireNonNull(id, "Cannot retrieve community information with a null id");
        // TODO: check weather the current user can read the given community information .e.g. Private Community
        return communityRepository.findCommunityById(id);
    }
}

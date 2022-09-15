package net.askvio.services;

import java.util.Objects;
import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.database.CommunityRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.UserAccount;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final UserAccountRepository userAccountRepository;
    private final AuthenticationManager authenticationManager;

    public Optional<CommunityResponse> getCommunity(Long id) {
        Objects.requireNonNull(id, "Cannot retrieve community information with a null id");
        // TODO: check weather the current user can read the given community information .e.g. Private Community
        return communityRepository.findCommunityById(id);
    }

    public void join(Long communityId, Authentication authentication) {
        communityRepository.findById(communityId).ifPresentOrElse(community -> {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Optional<UserAccount> userAccount = userAccountRepository.findByEmail(userDetails.getUsername());
            userAccount.ifPresent(account -> {
                community.getMembers().add(account);
                communityRepository.save(community);
            });
        }, () -> log.error("Community not found"));
    }
}

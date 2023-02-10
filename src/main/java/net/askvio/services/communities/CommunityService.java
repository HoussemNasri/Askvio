package net.askvio.services.communities;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.database.CommunityRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.Community;
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

    public Optional<CommunityResponse> getCommunityByName(String name) {
        Objects.requireNonNull(name);
        return communityRepository.findCommunitiesByName(name);
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

    public List<CommunityResponse> getCommunities() {
        return communityRepository.findCommunityResponseBy();
    }

    public CommunityResponse mapCommunityToCommunityResponse(Community community) {
        return communityRepository.findCommunityById(community.getId()).orElseThrow();
    }

    public boolean isCurrentUserMemberOfCommunity(Long communityId, Authentication authentication) {
        log.info("Community Id: {}", communityId);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Optional<UserAccount> userAccount = userAccountRepository.findByEmail(userDetails.getUsername());
        return userAccount.map(account -> {
            log.info("Username: {}", account.getUsername());
            return communityRepository.isUserMemberOfCommunity(account, communityId);
        }).orElseThrow();
    }
}

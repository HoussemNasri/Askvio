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
import net.askvio.services.account.UserAccountService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final UserAccountRepository userAccountRepository;
    private final UserAccountService userAccountService;


    public Optional<CommunityResponse> getCommunityByName(String name) {
        Objects.requireNonNull(name);
        return communityRepository.findCommunitiesByName(name);
    }

    public void join(Long communityId, Authentication authentication) {
        Optional<Community> communityOpt = communityRepository.findById(communityId);
        if (communityOpt.isEmpty()) {
            log.info("Unable to join community. Community doesn't exist");
        }

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Optional<UserAccount> userAccountOpt = userAccountRepository.findByEmail(userDetails.getUsername());
        if (userAccountOpt.isEmpty()) {
            log.info("Unable to join community. Associated user account is invalid");
        }

        Community community = communityOpt.get();
        UserAccount account = userAccountOpt.get();

        community.getMembers().add(account);
        communityRepository.save(community);
    }

    public List<CommunityResponse> getCommunities() {
        return communityRepository.findCommunityResponseBy();
    }

    public boolean isCurrentUserMemberOfCommunity(Long communityId, Authentication authentication) {
        log.info("Checking if principal user is member of community '{}'...", communityId);

        Optional<UserAccount> principalOpt = userAccountService.getPrincipalUserAccount();
        if (principalOpt.isEmpty()) {
            log.info("Unable to check if principal user if member of community '{}'. Request is not authenticated", communityId);
        }

        return communityRepository.isUserMemberOfCommunity(principalOpt.get(), communityId);
    }
}

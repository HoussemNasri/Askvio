package net.askvio.controllers.communities;

import java.util.List;

import lombok.AllArgsConstructor;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.services.CommunityService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/communities")
public class CommunitiesController {
    private final CommunityService communityService;

    @GetMapping("/{id}")
    public ResponseEntity<CommunityResponse> getCommunity(@PathVariable Long id) {
        return communityService.getCommunity(id)
                               .map(ResponseEntity::ok)
                               .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<CommunityResponse>> getCommunities() {
        List<CommunityResponse> communities = communityService.getCommunities();
            return ResponseEntity.ok(communities);
    }

    @GetMapping("/{id}/members")
    public ResponseEntity<?> getMembers(@PathVariable Long id) {
        throw new NotImplementedException();
    }

    @PostMapping("/{id}/join")
    public ResponseEntity<?> join(@PathVariable("id") Long communityId, Authentication authentication) {
        communityService.join(communityId, authentication);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/leave")
    public ResponseEntity<?> leave(@PathVariable("id") Long communityId) {
        throw new NotImplementedException();
    }
}

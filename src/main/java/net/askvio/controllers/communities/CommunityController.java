package net.askvio.controllers.communities;

import lombok.AllArgsConstructor;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.services.CommunityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/communities")
public class CommunityController {
    private final CommunityService communityService;

    @GetMapping("/{id}")
    public ResponseEntity<CommunityResponse> getCommunity(@PathVariable Long id) {
        return communityService.getCommunity(id)
                               .map(ResponseEntity::ok)
                               .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("{id}/joinCommunity")
    public ResponseEntity<?> join(@PathVariable("id") Long communityId) {
        throw new NotImplementedException();
    }

    @PostMapping("{id}/leaveCommunity")
    public ResponseEntity<?> leave(@PathVariable("id") Long communityId) {
        throw new NotImplementedException();
    }
}
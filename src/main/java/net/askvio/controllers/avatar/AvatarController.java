package net.askvio.controllers.avatar;

import lombok.AllArgsConstructor;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.services.avatar.AvatarServiceFactory;
import net.askvio.services.avatar.AvatarType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/avatars")
public class AvatarController {
    private final AvatarServiceFactory avatarServiceFactory;

    @GetMapping("/{userId}/{avatarType}")
    public ResponseEntity<UserAvatarResponse> getUserAvatar(@PathVariable Long userId, @PathVariable AvatarType avatarType) {
        return avatarServiceFactory.create(avatarType).getUserAvatar(userId)
                                   .map(ResponseEntity::ok)
                                   .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{userId}")
    public UserAvatarResponse getUserAvatar(@PathVariable Long userId) {
        throw new NotImplementedException();
    }

    @GetMapping("/{userId}/all")
    public UserAvatarListResponse getUserAvatarList(@PathVariable Long userId) {
        throw new NotImplementedException();
    }
}

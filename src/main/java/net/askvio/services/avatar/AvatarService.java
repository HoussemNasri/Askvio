package net.askvio.services.avatar;

import java.util.Optional;

import lombok.AllArgsConstructor;
import net.askvio.controllers.avatar.UserAvatarResponse;
import net.askvio.database.UserAccountRepository;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public abstract class AvatarService {
    protected final UserAccountRepository userAccountRepository;
    public abstract Optional<UserAvatarResponse> getUserAvatar(Long userId);
}

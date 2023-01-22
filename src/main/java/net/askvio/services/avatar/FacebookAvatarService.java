package net.askvio.services.avatar;

import java.util.Optional;

import net.askvio.controllers.avatar.UserAvatarResponse;
import net.askvio.database.UserAccountRepository;
import org.springframework.stereotype.Service;

@Service
public class FacebookAvatarService extends AvatarService {
    public FacebookAvatarService(UserAccountRepository userAccountRepository) {
        super(userAccountRepository);
    }

    @Override
    public Optional<UserAvatarResponse> getUserAvatar(Long userId) {
        return Optional.empty();
    }
}

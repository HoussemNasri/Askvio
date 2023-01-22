package net.askvio.services.avatar;

import java.util.Optional;

import net.askvio.controllers.avatar.UserAvatarResponse;
import net.askvio.database.UserAccountRepository;
import org.springframework.stereotype.Service;

@Service
public class UploadedAvatarService extends AvatarService {
    public UploadedAvatarService(UserAccountRepository userAccountRepository) {
        super(userAccountRepository);
    }

    @Override
    public Optional<UserAvatarResponse> getUserAvatar(Long userId) {
        return Optional.empty();
    }
}

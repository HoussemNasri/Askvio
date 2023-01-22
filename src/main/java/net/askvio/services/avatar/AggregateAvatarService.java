package net.askvio.services.avatar;

import java.util.Optional;

import net.askvio.controllers.avatar.UserAvatarResponse;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.UserAccount;
import org.springframework.stereotype.Service;

@Service
public class AggregateAvatarService {
    private final UserAccountRepository userAccountRepository;
    private final AvatarServiceFactory avatarServiceFactory;

    public AggregateAvatarService(UserAccountRepository userAccountRepository, AvatarServiceFactory avatarServiceFactory) {
        this.userAccountRepository = userAccountRepository;
        this.avatarServiceFactory = avatarServiceFactory;
    }

    public UserAvatarResponse getUserAvatar(Long userId) {
        Optional<UserAccount> userOpt = userAccountRepository.findById(userId);
        if (userOpt.isEmpty()) {
            throw new IllegalArgumentException("Bad userId: " + userId);
        }

        UserAccount user = userOpt.get();

        return avatarServiceFactory.create(user.getAvatarType()).getUserAvatar(userId).orElseThrow();
    }
}

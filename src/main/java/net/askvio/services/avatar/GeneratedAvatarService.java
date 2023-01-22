package net.askvio.services.avatar;

import java.util.Optional;

import net.askvio.controllers.avatar.UserAvatarResponse;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.UserAccount;
import net.askvio.services.MD5Service;
import org.springframework.stereotype.Service;

@Service
public class GeneratedAvatarService extends AvatarService {
    private final MD5Service md5Service;

    public GeneratedAvatarService(UserAccountRepository userAccountRepository, MD5Service md5Service) {
        super(userAccountRepository);
        this.md5Service = md5Service;
    }

    @Override
    public Optional<UserAvatarResponse> getUserAvatar(Long userId) {
        Optional<UserAccount> userOpt = userAccountRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return Optional.empty();
        }

        UserAccount user = userOpt.get();
        String hashedEmail = md5Service.hash(user.getEmail());
        String avatarLink = "https://www.gravatar.com/avatar/" + hashedEmail + "?s=256&d=identicon&r=PG&f=1";

        return Optional.of(new UserAvatarResponse(avatarLink, AvatarType.GENERATED));
    }
}

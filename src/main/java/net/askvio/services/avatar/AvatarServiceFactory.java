package net.askvio.services.avatar;

import lombok.AllArgsConstructor;
import net.askvio.database.UserAccountRepository;
import net.askvio.services.MD5Service;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class AvatarServiceFactory {

    private final UserAccountRepository userAccountRepository;
    private final MD5Service md5Service;

    public AvatarService create(AvatarType avatarType) {
        return switch (avatarType) {
            case UPLOADED -> new UploadedAvatarService(userAccountRepository);
            case GENERATED -> new GeneratedAvatarService(userAccountRepository, md5Service);
            case FROM_FACEBOOK -> new FacebookAvatarService(userAccountRepository);
            case FROM_GOOGLE -> new GoogleAvatarService(userAccountRepository);
        };
    }
}

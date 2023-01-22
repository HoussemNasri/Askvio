package net.askvio.controllers.avatar;

import net.askvio.services.avatar.AvatarType;

public record UserAvatarResponse(
        String link,
        AvatarType type
) {
}

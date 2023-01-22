package net.askvio.controllers.avatar;

public record UserAvatarListResponse(
        String google,
        String facebook,
        String uploaded,
        String generated
) {
}

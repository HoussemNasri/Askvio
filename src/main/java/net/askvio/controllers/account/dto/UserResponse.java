package net.askvio.controllers.account.dto;

import java.time.Instant;

public record UserResponse(
        Long accountId,
        String firstname,
        String lastname,
        String username,
        String email,
        boolean hasActiveAccount,
        Instant accountCreationDate
) {
}

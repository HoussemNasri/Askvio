package net.askvio.controllers.answers.dto;

import java.time.Instant;

import net.askvio.controllers.account.dto.UserResponse;

public record AnswerResponse(
        Long id,
        String content,
        Instant creationDate,
        UserResponse owner,
        Long questionId,
        boolean isAccepted,
        String link
) {
}

package net.askvio.controllers.questions.dto;

import java.time.Instant;

import net.askvio.controllers.communities.CommunityResponse;
import net.askvio.controllers.account.dto.UserResponse;

public record QuestionResponse(
        Long id,
        String title,
        String content,
        Instant creationDate,
        Integer voteCount,
        Integer answersCount,
        UserResponse owner,
        CommunityResponse community,
        String link
) {
}

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
        String link,
        /*
         *  True if the principal user downvoted the question, false otherwise.
         * */
        boolean downvoted,
        /*
         * True if the principal user upvoted this question, false otherwise.
         * */
        boolean upvoted
) {
}

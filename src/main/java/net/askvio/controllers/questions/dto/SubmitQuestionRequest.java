package net.askvio.controllers.questions.dto;

/**
 * A DTO object for making a question submission request.
 * <br>
 * <p>The request doesn't include any information
 * about the poster because the app can extract that information from the JWT token passed in the request
 * header
 *</p>
 * @param title       The title of the question. It shouldn't be null nor blank.
 * @param content     The content or body of the question.
 * @param communityId The id of the community the question was submitted to.
 */
public record SubmitQuestionRequest(
        String title,
        String content,
        Long communityId
) {
}

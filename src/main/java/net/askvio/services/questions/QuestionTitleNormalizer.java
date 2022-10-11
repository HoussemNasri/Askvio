package net.askvio.services.questions;

import java.util.Locale;
import java.util.Objects;

import net.askvio.exceptions.NotImplementedException;
import org.springframework.stereotype.Service;

@Service
public class QuestionTitleNormalizer {

    // TODO: This needs a lot of testing
    public String normalize(String title) {
        Objects.requireNonNull(title);
        if (title.isBlank()) {
            return "";
        } else {
            return title.replaceAll("[,/_&.\\\\s]", "-")
                    .replaceAll("[^-\\w]", "")
                    // Remove suffix '-'
                    .replaceAll("-$", "")
                    .toLowerCase(Locale.ROOT);
        }
    }
}

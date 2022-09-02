package net.askvio.services.authentication;

import java.util.Objects;
import java.util.Random;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UsernameGeneratorService {
    private final Random random = new Random();

    public String generate(String firstname, String lastname) {
        Objects.requireNonNull(firstname);
        Objects.requireNonNull(lastname);

        return String.format("%s.%s.%d", firstname, lastname, random.nextInt(Integer.MAX_VALUE));
    }
}

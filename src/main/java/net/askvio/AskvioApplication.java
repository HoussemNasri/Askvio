package net.askvio;

import lombok.AllArgsConstructor;
import net.askvio.database.CommunityRepository;
import net.askvio.database.UserAccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class AskvioApplication implements CommandLineRunner {

    private final UserAccountRepository userAccountRepository;
    private final CommunityRepository communityRepository;

    public static void main(String[] args) {
        SpringApplication.run(AskvioApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}

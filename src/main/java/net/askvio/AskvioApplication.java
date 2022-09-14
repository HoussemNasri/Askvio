package net.askvio;

import java.time.Instant;
import java.util.Set;

import lombok.AllArgsConstructor;
import net.askvio.database.CommunityRepository;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.Community;
import net.askvio.model.CommunityType;
import net.askvio.model.Topic;
import net.askvio.model.UserAccount;
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
        loadTestUserAccounts();
        loadTestCommunities();
    }

    private void loadTestUserAccounts() {
        userAccountRepository.save(new UserAccount(
                null,
                "Houssem",
                "Nasri",
                "houssem.nasri.15",
                "housi.housi2015@gmail.com",
                "123",
                Instant.parse("2018-06-01T18:35:24.00Z"),
                true
        ));
        userAccountRepository.save(new UserAccount(
                null,
                "Sammie",
                "Greene",
                "Moused69",
                "SammieGGreene@teleworm.us",
                "Am0neeth1",
                Instant.parse("2020-07-19T18:35:24.00Z"),
                true
        ));
        userAccountRepository.save(new UserAccount(
                null,
                "John",
                "Ramirez",
                "Thavie",
                "JohnKRamirez@dayrep.com",
                "Engeroof0",
                Instant.parse("2021-01-02T18:35:24.00Z"),
                true
        ));
    }

    private void loadTestCommunities() {
        communityRepository.save(new Community(
                null,
                CommunityType.PUBLIC,
                "houssemCommunity",
                "Java",
                "Welcome to the Houssem's Community",
                Topic.PROGRAMMING,
                Set.of(Topic.NEWS, Topic.TECHNOLOGY)
        ));

        communityRepository.save(new Community(
                null,
                CommunityType.PRIVATE,
                "VIP",
                "VIP",
                "VIP rocks all",
                Topic.GAMING,
                Set.of(Topic.SPORTS)
        ));
    }
}

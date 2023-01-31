package net.askvio.services.account;

import java.util.Optional;

import lombok.AllArgsConstructor;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.UserAccount;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;

    public Optional<UserAccount> getPrincipalUserAccount(Authentication authentication) {
        if (authentication == null) {
            return Optional.empty();
        }

        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return Optional.ofNullable(principal)
                       .map(UserDetails::getUsername)
                       .flatMap(userAccountRepository::findByEmail);
    }
}

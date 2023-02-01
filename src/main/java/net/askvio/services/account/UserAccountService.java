package net.askvio.services.account;

import java.util.Optional;

import lombok.AllArgsConstructor;
import net.askvio.database.UserAccountRepository;
import net.askvio.model.UserAccount;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;

    public Optional<UserAccount> getPrincipalUserAccount(Authentication authentication) {
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetails principal)) {
            return Optional.empty();
        }

        return Optional.of(principal)
                       .map(UserDetails::getUsername)
                       .flatMap(userAccountRepository::findByEmail);
    }

    public Optional<UserAccount> getPrincipalUserAccount() {
        return getPrincipalUserAccount(SecurityContextHolder.getContext().getAuthentication());
    }
}

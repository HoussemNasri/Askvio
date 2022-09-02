package net.askvio.services.authentication;

import java.util.Collections;

import lombok.AllArgsConstructor;
import net.askvio.database.UserAccountRepository;
import net.askvio.exceptions.AskvioException;
import net.askvio.model.UserAccount;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class SimpleUserDetailsService implements UserDetailsService {
    private final UserAccountRepository userAccountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userAccountRepository
                .findByEmail(email)
                .map(this::extractUserDetails)
                .orElseThrow(() -> new AskvioException("Error while authenticating user with email: " + email));
    }

    public UserDetails extractUserDetails(UserAccount account) {
        return User.withUsername(account.getEmail())
                   .password(account.getHashedPassword())
                   .authorities(Collections.emptyList())
                   .build();
    }
}

package net.askvio.services.authentication;

import lombok.AllArgsConstructor;
import net.askvio.controllers.authentication.dto.LoginRequest;
import net.askvio.controllers.authentication.dto.LoginResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    private final UsernameGeneratorService usernameGeneratorService;
    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    public LoginResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.email(),
                request.password()
        ));

        UserDetails user = (UserDetails) authentication.getPrincipal();
        return new LoginResponse(jwtService.generateJwtToken(user));
    }
}

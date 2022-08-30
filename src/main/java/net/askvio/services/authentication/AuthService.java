package net.askvio.services.authentication;

import lombok.AllArgsConstructor;
import net.askvio.exceptions.NotImplementedException;
import net.askvio.controllers.authentication.dto.LoginRequest;
import net.askvio.controllers.authentication.dto.LoginResponse;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    private final UsernameGeneratorService usernameGeneratorService;

    public LoginResponse login(LoginRequest request) {
        throw new NotImplementedException();
    }
}

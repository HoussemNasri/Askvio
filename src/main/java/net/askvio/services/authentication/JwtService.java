package net.askvio.services.authentication;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    private static final Duration TOKEN_DURATION = Duration.ofHours(24);
    @Value("${app.jwt.secret}")
    private String SECRET_KEY;
    public String generateJwtToken(UserDetails user) {
        return Jwts.builder()
                   .setSubject(user.getUsername())
                   .setIssuedAt(Date.from(Instant.now()))
                   .setExpiration(Date.from(Instant.now().plus(TOKEN_DURATION)))
                   .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }
}

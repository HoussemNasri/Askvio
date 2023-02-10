package net.askvio.services.authentication;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class JwtService {
    private static final Duration TOKEN_DURATION = Duration.ofDays(30);
    @Value("${app.jwt.secret}")
    private String SECRET_KEY;
    public String generateJwtToken(UserDetails user) {
        return Jwts.builder()
                   .setSubject(user.getUsername())
                   .setIssuedAt(Date.from(Instant.now()))
                   .setExpiration(Date.from(Instant.now().plus(TOKEN_DURATION)))
                   .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public boolean validateJwtToken(String jwt) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(jwt);
            return true;
        } catch (ExpiredJwtException ex) {
            log.error("JWT expired", ex);
        } catch (IllegalArgumentException ex) {
            log.error("Token is null, empty or only whitespace", ex);
        } catch (MalformedJwtException ex) {
            log.error("JWT is invalid", ex);
        } catch (UnsupportedJwtException ex) {
            log.error("JWT is not supported", ex);
        } catch (SignatureException ex) {
            log.error("Signature validation failed");
        }

        return false;
    }

    public String extractEmailFromJWT(String jwt) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(jwt).getBody().getSubject();
    }
}

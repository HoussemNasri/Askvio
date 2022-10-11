package net.askvio.controllers.account;

import net.askvio.exceptions.NotImplementedException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UsersController {

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        throw new NotImplementedException();
    }
}

package net.askvio.controllers.history;

import net.askvio.exceptions.NotImplementedException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserHistoryController {

    @GetMapping("/{username}/comments")
    public ResponseEntity<?> getUserCommentsHistory(@PathVariable String username) {
        throw new NotImplementedException();
    }
}

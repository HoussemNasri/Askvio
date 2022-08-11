package net.askvio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping
    public String homePage() {
        return "<h1> Hello World </h1>";
    }
}

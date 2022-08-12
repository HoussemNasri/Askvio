package net.askvio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping
    public String homePage(@RequestParam(defaultValue = "World") String name) {
        return "<h1> Hello %s </h1>".formatted(name);
    }
}

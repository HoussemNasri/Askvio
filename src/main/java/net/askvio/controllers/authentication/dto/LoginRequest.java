package net.askvio.controllers.authentication.dto;

public record LoginRequest(
        String email,
        String password) {
}

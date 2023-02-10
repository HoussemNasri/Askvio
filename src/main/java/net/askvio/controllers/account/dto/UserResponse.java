package net.askvio.controllers.account.dto;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Value;

/**
 * A Projection for the {@link net.askvio.model.UserAccount} entity
 * */
public interface UserResponse {
    @Value("#{target.id}")
    Long getAccountId();

    String getFirstname();

    String getLastname();

    String getUsername();

    String getEmail();

    @Value("#{@aggregateAvatarService.getUserAvatar(target.id).link()}")
    String getAvatar();

    @Value("#{target.activated}")
    boolean hasActiveAccount();

    @Value("#{target.creationDate}")
    Instant getAccountCreationDate();
}

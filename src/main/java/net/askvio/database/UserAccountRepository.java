package net.askvio.database;

import java.util.Optional;

import net.askvio.controllers.account.dto.UserResponse;
import net.askvio.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    Optional<UserAccount> findByEmail(String email);

    Optional<UserResponse> findUserResponseDTOByEmail(String email);

    Optional<UserResponse> findUserResponseDTOById(Long id);
}

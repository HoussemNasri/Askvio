package net.askvio.database;

import java.util.Optional;

import net.askvio.controllers.account.dto.UserResponse;
import net.askvio.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    Optional<UserAccount> findByEmail(String email);

    @Query("SELECT new net.askvio.controllers.account.dto.UserResponse(account.id, account.firstname, account.lastname, account.username, account.email, account.activated, account.creationDate) FROM UserAccount account WHERE account.email = :email")
    Optional<UserResponse> findUserResponseDTOByEmail(String email);
}

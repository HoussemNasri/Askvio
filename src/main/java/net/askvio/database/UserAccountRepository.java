package net.askvio.database;

import net.askvio.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    UserAccount findUserAccountByEmail(String email);
}

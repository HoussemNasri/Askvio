package net.askvio.model;

import java.time.Instant;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import net.askvio.services.avatar.AvatarType;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @NotBlank(message = "Firstname is required")
    private String firstname;
    @NotBlank(message = "Lastname is required")
    private String lastname;
    @NotBlank(message = "Username is required")
    private String username;
    @NotBlank(message = "Email is required")
    private String email;
    @NotBlank(message = "Password is required")
    private String hashedPassword;
    private Instant creationDate;
    private Boolean activated;

    @Enumerated(EnumType.STRING)
    private AvatarType avatarType;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "members")
    private Set<Community> joinedCommunities;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof UserAccount that))
            return false;
        return getId().equals(that.getId()) && getFirstname().equals(that.getFirstname()) && getLastname().equals(that.getLastname()) && getUsername().equals(that.getUsername()) && getEmail().equals(that.getEmail()) && getHashedPassword().equals(that.getHashedPassword()) && Objects.equals(getCreationDate(), that.getCreationDate()) && Objects.equals(getActivated(), that.getActivated());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstname(), getLastname(), getUsername(), getEmail(), getHashedPassword(), getCreationDate(), getActivated());
    }
}

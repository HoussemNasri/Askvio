package net.askvio.services.votes;

import java.util.Optional;

import lombok.AllArgsConstructor;
import net.askvio.database.UserAccountRepository;
import net.askvio.database.VoteRepository;
import net.askvio.model.Post;
import net.askvio.model.UserAccount;
import net.askvio.model.VoteType;
import net.askvio.services.account.UserAccountService;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@SuppressWarnings("OptionalIsPresent")
@Service
@AllArgsConstructor
public class VoteService {
    private final VoteRepository voteRepository;
    private final UserAccountService userAccountService;

    public boolean isPostUpvotedByPrincipalUser(Post post) {
        return checkVote(post, VoteType.UPVOTE);
    }

    public boolean isPostDownvotedByPrincipalUser(Post post) {
        return checkVote(post, VoteType.DOWNVOTE);
    }

    private boolean checkVote(Post post, VoteType expectedVote) {
        Optional<UserAccount> principalUserOpt = userAccountService.getPrincipalUserAccount();
        if (principalUserOpt.isEmpty()) {
            return false;
        }

        Optional<VoteType> voteTypeOpt = voteRepository.getUserVoteOnPost(principalUserOpt.get().getId(), post.getId());
        if (voteTypeOpt.isEmpty()) {
            return false;
        }

        return voteTypeOpt.get() == expectedVote;
    }
}

package net.askvio.services.votes;

import java.util.Optional;

import javax.transaction.Transactional;

import lombok.AllArgsConstructor;
import net.askvio.database.PostRepository;
import net.askvio.database.VoteRepository;
import net.askvio.model.Post;
import net.askvio.model.UserAccount;
import net.askvio.model.Vote;
import net.askvio.model.VoteType;
import net.askvio.services.account.UserAccountService;
import org.springframework.stereotype.Service;

@SuppressWarnings("OptionalIsPresent")
@Service
@AllArgsConstructor
public class VoteService {
    private final VoteRepository voteRepository;
    private final PostRepository postRepository;
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

    /**
     * Returns {@code true} if the upvote was performed with success and {@code false} otherwise
     */
    @Transactional
    public boolean upvote(Long postId) {
        Optional<UserAccount> principalUserOpt = userAccountService.getPrincipalUserAccount();
        if (principalUserOpt.isEmpty()) {
            return false;
        }

        UserAccount principalUser = principalUserOpt.get();
        voteRepository.deleteUserVoteOnPost(principalUser.getId(), postId);
        voteRepository.save(new Vote(postRepository.getReferenceById(postId), principalUser, VoteType.UPVOTE));

        return true;
    }

    /**
     * Returns {@code true} if the downvote was performed with success and {@code false} otherwise
     */
    @Transactional
    public boolean downvote(Long postId) {
        Optional<UserAccount> principalUserOpt = userAccountService.getPrincipalUserAccount();
        if (principalUserOpt.isEmpty()) {
            return false;
        }

        UserAccount principalUser = principalUserOpt.get();
        voteRepository.deleteUserVoteOnPost(principalUser.getId(), postId);
        voteRepository.save(new Vote(postRepository.getReferenceById(postId), principalUser, VoteType.DOWNVOTE));

        return true;
    }
}

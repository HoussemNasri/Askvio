package net.askvio.model;

public enum VoteType {
    UPVOTE(1),
    DOWNVOTE(-1);
    private final Integer value;

    VoteType(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return value;
    }

    public static VoteType fromValue(Integer value) {
        if (!(value == -1 || value == 1)) {
            throw new IllegalArgumentException();
        }
        return value == 1 ? UPVOTE : DOWNVOTE;
    }
}

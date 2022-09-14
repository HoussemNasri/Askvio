package net.askvio.model;

public enum Topic {
    TECHNOLOGY("Technology"),
    PROGRAMMING("Programming"),
    GAMING("Gaming"), SPORTS("Sports"),
    NEWS("News"),
    TV("TV");
    private final String displayName;

    Topic(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}

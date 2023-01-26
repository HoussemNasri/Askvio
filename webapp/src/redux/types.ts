export interface FeedResponse {
    total: number;
    feed:  QuestionResponse[];
}

export interface QuestionResponse {
    id:           number;
    title:        string;
    content:      string;
    creationDate: Date;
    voteCount:    number;
    answersCount: number;
    owner:        UserResponse;
    community:    CommunityResponse;
    link:         string;
}

export interface CommunityResponse {
    name:         string;
    id:           number;
    displayName:  string;
    primaryTopic: string;
    about:        string;
    subtopics:    string[];
    isPublic:     boolean;
    isPrivate:    boolean;
    isRestricted: boolean;
}

export interface UserResponse {
    accountId:           number;
    firstname:           string;
    lastname:            string;
    username:            string;
    email:               string;
    avatar:              string;
    hasActiveAccount:    boolean;
    accountCreationDate: Date;
}

import Post from "../components/Post";
import {retry} from "@reduxjs/toolkit/query";

export interface FeedResponse {
    total: number;
    feed:  QuestionResponse[];
}

export interface QuestionResponse extends PostModel {
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

export interface PostModel {
    id: number;
    content: string;
    creationDate: Date;
    voteCount: number;
    owner: UserResponse;
    link: string
}

export interface AnswerResponse extends PostModel {
    id:           number;
    content:      string;
    creationDate: Date;
    voteCount:    number;
    owner:        UserResponse;
    questionId:   number;
    isAccepted:   boolean;
    link:         string;
}

export interface AnswerResponseList {
    answers: AnswerResponse[]
}

// Type guards to workaround not being able to use instanceof on interfaces in Typescript
export function isQuestion(post: PostModel) {
    return 'community' in post
}

export function isAnswer(post: PostModel) {
    return 'questionId' in post
}

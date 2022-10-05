import axios from 'axios'
import {getCurrentAccessToken} from "./AuthService";
import {bool} from "yup";

export type CommunityResponse = {
    id: number;
    name: string;
    displayName: string;
    about: string;
    primaryTopic: string;
    subtopics: string[];
    isPublic: boolean;
    isRestricted: boolean;
    isPrivate: boolean;
}

const API_BASE_ENDPOINT = "http://localhost:8080/api/v1/communities"

export function getAllCommunities(): Promise<CommunityResponse[] | void> {
    return axios.get(API_BASE_ENDPOINT).then(response => {
        return response.data as CommunityResponse[]
    }).catch(e => {
        console.error("An error occurred while fetching communities", e)
    })
}

type isMemberResponse = {
    isMember: boolean
}

export function isCurrentUserMemberOfCommunity(communityId: number): Promise<boolean> {
    if (getCurrentAccessToken() == null) {
        return new Promise(() => false);
    }

    return axios.get(`${API_BASE_ENDPOINT}/${communityId}/isMember`, {
        headers: {Authorization: `Bearer ${getCurrentAccessToken()}`}
    }).then(response => (response.data as isMemberResponse).isMember)
        .catch(e => {
            console.error("An error occurred while checking membership of current user", e)
            return false;
        })
}

export function joinCommunity(communityId: number): Promise<void> {
    console.log("Ezzebi?")
    if (getCurrentAccessToken() == null) {
        return new Promise<void>(() => {
        });
    }
    console.log(getCurrentAccessToken())
    return axios.post(`${API_BASE_ENDPOINT}/${communityId}/join`,undefined, {
        headers: {Authorization: `Bearer ${getCurrentAccessToken()}`}
    }).then(() => {
        console.log("Joined community successfully")
    }).catch(e => {
        console.error("An error occurred while checking joining a community", e)
    })
}
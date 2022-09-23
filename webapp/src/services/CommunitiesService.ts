import axios from 'axios'

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
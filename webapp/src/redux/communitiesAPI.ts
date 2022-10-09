import axios from "axios";

const COMMUNITIES_API = 'http://localhost:8080/api/v1/communities'

export function loadAllCommunities() {
    return axios.get(COMMUNITIES_API)
        .then(response => {
            return response.data as CommunityResponse[]
        }).catch(error => console.error(`Failed to fetch all communities ${error}`))
}

export function join(jwt: string, communityId: number) {
    if (!jwt) {
        throw new Error('User is not authenticated!')
    }

    return axios.post(`${COMMUNITIES_API}/${communityId}/join`, undefined, {
        headers: {Authorization: `Bearer ${jwt}`}
    })
}

export function isCurrentUserMemberOfCommunity(jwt: string, communityId: number): Promise<boolean> {
    if (!jwt) {
        throw new Error('User is not authenticated!')
    }

    return axios.get(`${COMMUNITIES_API}/${communityId}/isMember`, {
        headers: {Authorization: `Bearer ${jwt}`}
    }).then(response => response.data.isMember).catch(e => {
        console.error("Failed to check current user community membership", e)
        return false;
    })
}

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
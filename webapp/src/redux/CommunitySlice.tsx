import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {CommunityResponse} from "./types";

export const communityAPI = createApi({
    reducerPath: "COMMUNITY_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/communities"
    }),
    endpoints: (builder) => ({
        getCommunity: builder.query<CommunityResponse, string>({query: (name) => `/${name}`})
    })
})

export const {useGetCommunityQuery} = communityAPI

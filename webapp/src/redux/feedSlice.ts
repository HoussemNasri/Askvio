import {createSlice} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FeedResponse} from "./types";


export const feedAPI = createApi({
    reducerPath: "FEED_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/feed",
        prepareHeaders: (headers) => {
            return headers
        }
    }),
    endpoints: (builder) => ({
        getFeed: builder.query<FeedResponse, void>({query: () => '/'})
    })
})

export const {
    useGetFeedQuery
} = feedAPI

const initialState = {}
export const feedSlice = createSlice({
    name: "FEED_SLICE",
    initialState,
    reducers: {}
})

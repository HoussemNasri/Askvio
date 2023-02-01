import {createSlice} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FeedResponse} from "./types";
import {selectJWT} from "./authSlice";
import {RootState} from "./app/store";


export const feedAPI = createApi({
    reducerPath: "FEED_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/feed",
        prepareHeaders: (headers, {getState}) => {
            headers.set("Authorization", `Bearer ${selectJWT(getState() as RootState)}`)
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

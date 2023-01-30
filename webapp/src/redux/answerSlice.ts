import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AnswerResponse, AnswerListResponse, PostAnswerRequest} from "./types";
import {getJwt} from "../services/storageService";
import {RootState} from "./app/store";
import {selectJWT} from "./authSlice";

export const answersAPI = createApi({
    reducerPath: "ANSWERS_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1",
        prepareHeaders: (headers, {getState}) => {
            headers.set("Authorization", `Bearer ${selectJWT(getState() as RootState)}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getAnswersOnQuestion: builder.query<AnswerListResponse, number>({query: (questionId) => `/questions/${questionId}/answers`}),
        postAnswer: builder.mutation<AnswerResponse, PostAnswerRequest>({
            query: ({questionId, content}) => ({
                url: `/questions/${questionId}/answers`,
                method: "POST",
                body: {content: content}
            })
        })
    })
})

export const {
    useGetAnswersOnQuestionQuery,
    usePostAnswerMutation
} = answersAPI

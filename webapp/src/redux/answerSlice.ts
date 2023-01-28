import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AnswerResponse, AnswerListResponse} from "./types";

export const answersAPI = createApi({
    reducerPath: "ANSWERS_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/questions"
    }),
    endpoints: (builder) => ({
        getAnswersOnQuestion: builder.query<AnswerListResponse, number>({query: (questionId) => `/${questionId}/answers`})
    })
})

export const {useGetAnswersOnQuestionQuery} = answersAPI

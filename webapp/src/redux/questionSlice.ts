import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {QuestionResponse} from "./types";

export const questionAPI = createApi({
    reducerPath: "QUESTION_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/questions"
    }),
    endpoints: (builder) => ({
        getQuestionById: builder.query<QuestionResponse, number>({query: (questionId) => `/${questionId}`})
    })
})

export const {
    useGetQuestionByIdQuery
} = questionAPI

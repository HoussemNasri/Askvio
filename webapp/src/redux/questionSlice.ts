import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {QuestionResponse} from "./types";
import {selectJWT} from "./authSlice";
import {RootState} from "./app/store";

export const questionAPI = createApi({
    reducerPath: "QUESTION_SLICE_API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/questions",
        prepareHeaders: (headers, {getState}) => {
            headers.set("Authorization", `Bearer ${selectJWT(getState() as RootState)}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getQuestionById: builder.query<QuestionResponse, number>({query: (questionId) => `/${questionId}`})
    })
})

export const {
    useGetQuestionByIdQuery
} = questionAPI

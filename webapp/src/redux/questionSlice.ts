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
        getQuestionById: builder.query<QuestionResponse, number>({query: (questionId) => `/${questionId}`}),
        upvote: builder.mutation<void, number>({
            query: (questionId) => ({
                url: `/${questionId}/upvote`,
                method: 'POST'
            }),
            async onQueryStarted(questionId, {queryFulfilled, dispatch}) {
                const patchResult = dispatch(questionAPI.util.updateQueryData('getQuestionById', questionId, (question) => {
                    if (question.downvoted) {
                        question.voteCount += 2
                    } else if (!question.upvoted && !question.downvoted) {
                        question.voteCount += 1
                    }
                    question.upvoted = true
                    question.downvoted = false
                }))

                try {
                    await queryFulfilled
                } catch(e) {
                    patchResult.undo()
                }
            }
        }),
        downvote: builder.mutation<void, number>({
            query: (questionId) => ({
                url: `/${questionId}/downvote`,
                method: 'POST'
            }),
            async onQueryStarted(questionId, {queryFulfilled, dispatch}) {
                const patchResult = dispatch(questionAPI.util.updateQueryData('getQuestionById', questionId, (question) => {
                    if (question.upvoted) {
                        question.voteCount -= 2
                    } else if (!question.upvoted && !question.downvoted) {
                        question.voteCount -= 1
                    }
                    question.upvoted = false
                    question.downvoted = true
                }))

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),
        getQuestionsAskedAtCommunity: builder.query<QuestionResponse[], string>({
            query: (community: string) => ({
                url: `/c/${community}`
            })
        })
    })
})

export const {
    useGetQuestionByIdQuery,
    useUpvoteMutation,
    useDownvoteMutation,
    useGetQuestionsAskedAtCommunityQuery
} = questionAPI

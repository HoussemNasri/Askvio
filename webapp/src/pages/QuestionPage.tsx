import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDownvoteMutation, useGetQuestionByIdQuery, useUpvoteMutation} from "../redux/questionSlice";
import {randomInt} from "../utils/RandomUtils";
import {Loader} from "../components/Loader";
import Post from "../components/Post";
import {QuestionResponse} from "../redux/types";
import AnswerList from "../components/AnswerList";
import PostAnswer from "../components/PostAnswer";
import {useAppDispatch} from "../redux/app/hooks";

function CommunityHeader() {
    return <div className="flex flex-row p-2 bg-gray-300 fixed top-[72px] left-60 right-0 items-center">
        <img className="w-8 h-8 rounded-full"
             src={`https://api.dicebear.com/5.x/bottts/svg?seed=${randomInt(200)}`}
             alt="Rounded avatar"/>
        <p className="text-base text-gray-800 font-bold">r/learnjava</p>
    </div>
}

function QuestionPostHeader(question: QuestionResponse) {
    return (<div className="flex flex-col">
            <div className="flex items-center gap-1">
                <p className="text-xs font-bold text-sky-600 mt-1">
                    c/{question.community.name}
                </p>
            </div>
            <h5 className="mb-2 text-3xl font-semibold text-gray-800 tracking-tight text-gray-900 dark:text-white">
                {question.title}
            </h5>
            <div className="flex flex-row gap-4 mb-2">
                <div className="flex flex-row gap-1.5 text-sm">
                    <p className="text-gray-600">Asked</p>
                    <p className="">10 hours ago</p>
                </div>
                <div className="flex flex-row gap-1.5 text-sm">
                    <p className="text-gray-600">Modified</p>
                    <p className="">2 days ago</p>
                </div>
                <div className="flex flex-row gap-1.5 text-sm">
                    <p className="text-gray-600">Viewed</p>
                    <p className="">120 times</p>
                </div>
            </div>
            <hr className="mt-1 mb-3"></hr>
        </div>
    )
}

export default function QuestionPage() {
    const params = useParams()
    const {error, isLoading, data, refetch: refetchQuestion} = useGetQuestionByIdQuery(Number(params.questionId))
    const [upvote, {isSuccess: isUpvoteSucceed, isLoading: upvoteRequestInProgress}] = useUpvoteMutation()
    const [downvote, {isSuccess: isDownvoteSucceed, isLoading: downvoteRequestInProgress}] = useDownvoteMutation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isUpvoteSucceed) {
            refetchQuestion()
        }
    }, [isUpvoteSucceed])

    useEffect(() => {
        if (isDownvoteSucceed) {
            refetchQuestion()
        }
    }, [isDownvoteSucceed])


    function onUpvote() {
        if (params.questionId && !upvoteRequestInProgress && !downvoteRequestInProgress) {
            upvote(Number(params.questionId))
        }
    }

    function onDownvote() {
        if (params.questionId && !upvoteRequestInProgress && !downvoteRequestInProgress) {
            downvote(Number(params.questionId))
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return <div className="flex flex-auto flex-col">
        {isLoading ? <Loader/> :
            (data &&
                (<>
                    <QuestionPostHeader {...data}/>
                    <Post post={data} onUpvote={onUpvote} onDownvote={onDownvote}/>
                    {
                        data.answersCount > 0 && <AnswerList questionId={data.id}/>
                    }
                    <div className="mt-5 flex flex-col gap-4">
                        <p className="text-xl text-gray-800">Your Answer</p>
                        <PostAnswer questionId={data.id}/>
                    </div>
                </>)
            )
        }
    </div>
}

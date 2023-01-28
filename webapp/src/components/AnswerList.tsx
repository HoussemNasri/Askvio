import React, {useEffect} from "react";
import {randomInt} from "../utils/RandomUtils";
import {useGetAnswersOnQuestionQuery} from "../redux/answerSlice";
import {AnswerListResponse} from "../redux/types";

interface AnswersHeaderProps {
    answersCount: number
}

function AnswersHeader({answersCount}: AnswersHeaderProps) {
    return <div id="answers-header">
        <p className="text-xl">
            {answersCount} Answers
        </p>
    </div>
}

interface AnswersProps {
    questionId: number
}

export default function AnswerList({questionId}: AnswersProps) {
    const {isLoading, data, error} = useGetAnswersOnQuestionQuery(questionId)

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data])

    if (error) {
        return <p>Error!</p>
    }

    if (isLoading) {
        return <p>Loading Answers...</p>
    }

    return <>
        {data && <div id="answers">
            <AnswersHeader answersCount={data.length}/>
        </div>}
    </>
}

import React, {useEffect} from "react";
import {useGetAnswersOnQuestionQuery} from "../redux/answerSlice";
import Answer from "./Answer";

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
        {data && <div id="answers" className="flex flex-col gap-4 max-w-3xl">
            <AnswersHeader answersCount={data.length}/>
            {
                data.map(answer => {
                    return <>
                        <Answer {...answer}/>
                        <hr id="answers-separator" className="mt-2"/>
                    </>
                })
            }
        </div>}
    </>
}

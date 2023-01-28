import React from "react";
import {randomInt} from "../utils/RandomUtils";

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
    return <div id="answers">
        <AnswersHeader answersCount={randomInt(10)}/>

    </div>
}

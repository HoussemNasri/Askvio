import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useGetQuestionByIdQuery} from "../redux/questionSlice";

export default function QuestionPost() {
    const params = useParams()
    const {error, isLoading, data} = useGetQuestionByIdQuery(Number(params.questionId))

    useEffect(() => {
        console.log(data)
    }, [data])

    return <div>
        Question Post Page {params.questionId}
    </div>
}

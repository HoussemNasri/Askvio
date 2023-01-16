import {useParams} from "react-router-dom";

export default function QuestionPost() {
    const params = useParams()

    return <div>
        Question Post Page {params.questionId}
    </div>
}

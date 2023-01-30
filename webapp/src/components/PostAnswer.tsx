import {useState} from "react";
import {usePostAnswerMutation} from "../redux/answerSlice";

interface PostAnswerProps {
    questionId: number
}
export default function PostAnswer({questionId}: PostAnswerProps) {
    const [content, setContent] = useState("")
    const [postAnswer, {isLoading}] = usePostAnswerMutation()
    function doPostAnswer() {
        postAnswer({questionId: questionId, content: content})
        setContent("")
    }

    return <div className="max-w-3xl">
        <form className="max-w-3xl" onSubmit={doPostAnswer}>
        <textarea id="message" rows={4}
                  className="block p-2.5 w-full text-sm tracking-wider  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-2 focus:ring-blue-500
                   focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500 outline-0"
                  placeholder="Write something useful..." value={content} onChange={e => setContent(e.target.value)}></textarea>
        <p className="ml-auto mt-1 text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow
            our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
        <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded
                text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Post Your Answer
        </button>
    </form>
    </div>
}

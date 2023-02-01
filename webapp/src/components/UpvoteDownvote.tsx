import {BsTriangleFill} from 'react-icons/bs'
import {selectAuth} from "../redux/authSlice";
import {useSelector} from "react-redux";
import {RootState} from "../redux/app/store";
interface UpvoteDownvoteProps {
    voteCount?: number,
    upvoted: boolean,
    downvoted: boolean
}

export default function UpvoteDownvote({voteCount = 1337, upvoted, downvoted}: UpvoteDownvoteProps) {

    return <div className="flex flex-col gap-3 items-center">
        <BsTriangleFill className={`w-6 h-6 ${upvoted ? 'text-[#3366FF]' : 'text-gray-400'}`}/>
        <p className="text-gray-500 text-xl font-normal">{voteCount}</p>
        <BsTriangleFill className={`w-6 h-6 ${downvoted ? 'text-[#3366FF]' : 'text-gray-400'} rotate-180`}></BsTriangleFill>
    </div>
}

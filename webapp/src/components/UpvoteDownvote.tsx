import {BsTriangleFill} from 'react-icons/bs'
interface UpvoteDownvoteProps {
    voteCount?: number
}

export default function UpvoteDownvote({voteCount = 1337}: UpvoteDownvoteProps) {
    return <div className="flex flex-col gap-3 items-center">
        <BsTriangleFill className="w-6 h-6 text-gray-400 "/>
        <p className="text-gray-500 text-xl font-normal">{voteCount}</p>
        <BsTriangleFill className="w-6 h-6 text-gray-400 rotate-180"></BsTriangleFill>
    </div>
}

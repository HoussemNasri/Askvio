import {BsTriangleFill} from 'react-icons/bs'

interface UpvoteDownvoteProps {
    voteCount?: number,
    upvoted: boolean,
    downvoted: boolean,
    onUpvote?: () => void,
    onDownvote?: () => void
}

export default function UpvoteDownvote({voteCount = 1337, upvoted, downvoted, onUpvote, onDownvote}: UpvoteDownvoteProps) {

    function doUpvote() {
        onUpvote?.()
    }

    function doDownvote() {
        onDownvote?.()
    }

    return <div className="flex flex-col gap-3 items-center">
        <BsTriangleFill className={`cursor-pointer w-6 h-6 ${upvoted ? 'text-[#3366FF]' : 'text-gray-400'}`} onClick={doUpvote}/>
        <p className="text-gray-500 text-xl font-normal">{voteCount}</p>
        <BsTriangleFill className={`cursor-pointer w-6 h-6 ${downvoted ? 'text-[#3366FF]' : 'text-gray-400'} rotate-180`} onClick={doDownvote}/>
    </div>
}

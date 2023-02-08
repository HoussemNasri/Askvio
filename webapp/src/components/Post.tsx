import {isQuestion, PostResponse} from "../redux/types";
import React, {useState} from "react";
import UpvoteDownvote from "./UpvoteDownvote";
import Bookmark from "./Bookmark";
import UserInfo from "./UserInfo";

interface PostProps {
    post: PostResponse,
    onUpvote: () => void,
    onDownvote: () => void
}

enum PostType {
    QUESTION,
    ANSWER
}

export default function Post({post, onUpvote, onDownvote}: PostProps) {
    const [postType, setPostType] = useState(() => isQuestion(post) ? PostType.QUESTION : PostType.ANSWER)

    return (<div className="max-w-3xl w-full flex flex-row">
        <div className="flex flex-col mr-5 items-center gap-4 mt-3">
            <UpvoteDownvote voteCount={post.voteCount} downvoted={post.downvoted} upvoted={post.upvoted} onUpvote={onUpvote} onDownvote={onDownvote}/>
            <Bookmark/>
        </div>
        <div className="w-full">
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {post.content}
            </p>
            <div className="flex flex-row mt-16 w-full">
                <div className="flex flex-row text-gray-600 gap-2 grow text-sm">
                    <p>Share</p>
                    <p>Edit</p>
                    <p>Follow</p>
                    <p>Flag</p>
                </div>
                <UserInfo userDetails={post.owner} action={postType == PostType.QUESTION ? "asked" : "answered"} actionTime={post.creationDate} isOwner={postType == PostType.QUESTION}/>
            </div>
        </div>
    </div>)
}

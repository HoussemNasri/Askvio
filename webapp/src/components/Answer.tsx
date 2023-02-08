import {AnswerResponse} from "../redux/types";
import Post from "./Post";
import React from "react";

export default function Answer(answer: AnswerResponse) {
    return <Post post={answer} onUpvote={() => {}}  onDownvote={() => {}} />
}

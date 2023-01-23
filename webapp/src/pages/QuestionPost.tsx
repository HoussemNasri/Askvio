import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useGetQuestionByIdQuery} from "../redux/questionSlice";
import {randomInt} from "../utils/RandomUtils";
import {Loader} from "../components/Loader";
import {convertToRelativeDate} from "../utils/DateUtils";
import UpvoteDownvote from "../components/UpvoteDownvote";
import Bookmark from "../components/Bookmark";
import UserInfo from "../components/UserInfo";

function CommunityHeader() {
    return <div className="flex flex-row p-2 bg-gray-300 fixed top-[72px] left-60 right-0 items-center">
        <img className="w-8 h-8 rounded-full"
             src={`https://api.dicebear.com/5.x/bottts/svg?seed=${randomInt(200)}`}
             alt="Rounded avatar"/>
        <p className="text-base text-gray-800 font-bold">r/learnjava</p>
    </div>
}

export default function QuestionPost() {
    const params = useParams()
    const {error, isLoading, data} = useGetQuestionByIdQuery(Number(params.questionId))

    useEffect(() => {
        console.log(data)
    }, [data])

    return <div className="flex flex-auto flex-col max-w-4xl">
        {isLoading ? <Loader/> : (data && <div className="flex flex-row">
            <div className="flex flex-col mr-4 items-center gap-4">
                <UpvoteDownvote/>
                <Bookmark/>
            </div>
            <div className="flex flex-col grow">
                <div className="flex flex-row items-center gap-1">
                    <p className="text-xs font-bold text-sky-600 mt-1">
                        v/{data.community.name}
                    </p>
                </div>
                <h5 className="mb-2 text-3xl font-semibold text-gray-800 tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                </h5>
                <div className="flex flex-row gap-4 mb-2">
                    <div className="flex flex-row gap-1.5 text-sm">
                        <p className="text-gray-600">Modified</p>
                        <p className="">2 days ago</p>
                    </div>
                    <div className="flex flex-row gap-1.5 text-sm">
                        <p className="text-gray-600">Viewed</p>
                        <p className="">120 times</p>
                    </div>
                </div>
                <hr className="mt-1 mb-3"></hr>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {data.content}
                </p>
                <div className="flex flex-row mt-16">
                    <div className="flex flex-row text-gray-600 gap-2 grow text-sm">
                        <p>Share</p>
                        <p>Edit</p>
                        <p>Follow</p>
                        <p>Flag</p>
                    </div>
                    <UserInfo userDetails={data.owner} action="asked" actionTime={data.creationDate} isOwner={true}/>
                </div>
                <p className="text-lg mt-10">
                    3 Answers
                </p>
            </div>
        </div>)
        }
    </div>
}

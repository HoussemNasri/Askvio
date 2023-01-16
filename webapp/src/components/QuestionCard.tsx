import {QuestionResponse} from "../redux/types";
import {convertToRelativeDate} from "../utils/DateUtils";
import {BsEye} from "react-icons/bs";
import {BiComment} from "react-icons/bi";
import {randomInt} from "../utils/RandomUtils";
import {BiUpvote} from "react-icons/bi"
import {Link} from "react-router-dom";

export type Question = {
    communityName: string
    title: string
    content: string
    posterUsername: string
    postedAgo: string
    commentsCount: number
}


interface QuestionFooterItem {
    title: string,
    icon: JSX.Element
}

interface QuestionFooterProps {
    commentsCount: number,
    viewsCount: number
}

function QuestionFooter({commentsCount, viewsCount}: QuestionFooterProps) {
    const footerItems: QuestionFooterItem[] = [
        {
            title: `${viewsCount} votes`,
            icon: <BiUpvote className="w-5 h-5"/>
        },
        {
            title: `${commentsCount} answers`,
            icon: <BiComment className="w-5 h-5 mt-1"/>
        },
        {
            title: `${viewsCount} views`,
            icon: <BsEye className="w-5 h-5"/>
        }
    ]

    return <div className="flex flex-row gap-6 mt-4">
        {
            footerItems.map(item =>
                <div className="flex flex-row gap-1.5 items-center">
                    <div className="text-gray-500">
                        {item.icon}
                    </div>
                    <p className="text-sm text-gray-700 font-bold">{item.title}</p>
                </div>
            )
        }
    </div>
}

function extractRoutePath(url: string) {
    return new URL(url).pathname
}
export default function QuestionCard({
                                         title,
                                         content,
                                         community,
                                         owner,
                                         creationDate,
                                         link
                                     }: QuestionResponse) {
    return (
        <Link to={extractRoutePath(link)}
           className="block p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-row items-center gap-1">
                <img className="w-8 h-8 rounded-full"
                     src={`https://api.dicebear.com/5.x/bottts/svg?seed=${community.name}`}
                     alt="Rounded avatar"/>
                <p className="text-sm font-bold">
                    v/{community.name}
                </p>
                <p>·</p>
                <p className="text-gray-500 text-sm font-normal">
                    Posted by u/{owner.username} {convertToRelativeDate(creationDate)}
                </p>
            </div>
            <h5 className="mb-2 mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 max-w-3xl">
                {content}
            </p>
            <QuestionFooter commentsCount={randomInt(100)} viewsCount={randomInt(100)}/>
        </Link>
    )
}

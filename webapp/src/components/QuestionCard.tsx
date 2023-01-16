import {QuestionResponse} from "../redux/types";
import {convertToRelativeDate} from "../utils/Date";

export type Question = {
    communityName: string
    title: string
    content: string
    posterUsername: string
    postedAgo: string
    commentsCount: number
}

export default function QuestionCard({
                                         title,
                                         content,
                                         community,
                                         owner,
                                         creationDate
                                     }: QuestionResponse) {
    return (
        <a href="#"
           className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-row items-center gap-1">
                <img className="w-8 h-8 rounded-full"
                     src={`https://api.dicebear.com/5.x/bottts/svg?seed=${Math.floor(Math.random() * 100)}`}
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
        </a>
    )
}

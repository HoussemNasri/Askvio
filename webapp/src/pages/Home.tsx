import QuestionCard, {Question} from "../components/QuestionCard";
import {useGetFeedQuery} from "../redux/feedSlice";
import {useEffect} from "react";

export default function Home() {
    const questions: Question[] = [
        {
            communityName: "java",
            title: "",
            content: "",
            posterUsername: "",
            postedAgo: "2 hours ago",
            commentsCount: 4
        },
        {
            communityName: "java",
            title: "",
            content: "",
            posterUsername: "",
            postedAgo: "2 hours ago",
            commentsCount: 4
        },
        {
            communityName: "java",
            title: "",
            content: "",
            posterUsername: "",
            postedAgo: "2 hours ago",
            commentsCount: 4
        },
    ]

    const {data, error, isLoading} = useGetFeedQuery()

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="flex">
            {
                isLoading ? (<p>Loading...</p>) : (<div className="flex flex-col gap-5">
                    {
                        data?.feed.map(question => {
                            return <QuestionCard {...question}/>
                        })
                    }
                </div>)
            }
        </div>
    )
}

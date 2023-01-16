import QuestionCard, {Question} from "../components/QuestionCard";

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
    return (
        <div className="flex flex-col gap-5">
            {
                questions.map(question => {
                    return <QuestionCard {...question}/>
                })
            }
        </div>)
}

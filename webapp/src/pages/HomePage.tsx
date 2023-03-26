import QuestionCard from "../components/QuestionCard";
import {useGetFeedQuery} from "../redux/feedSlice";

export default function HomePage() {
    const {data, error, isLoading, refetch} = useGetFeedQuery()

    if (isLoading) {
        return <div className="flex w-full h-full items-center justify-center">
            <p>Loading Feed...</p>
        </div>
    }

    if (error) {
        return <div className="flex w-full h-full items-center justify-center">
            <button className="py-2 px-3 rounded bg-cyan-600 text-white" onClick={refetch}>Retry</button>
        </div>
    }

    return (
        <div className="flex">
            {
                data && <div className="flex flex-col gap-5">
                    {
                        data?.feed.map(question => {
                            return <QuestionCard question={question}/>
                        })
                    }
                </div>
            }
        </div>
    )
}

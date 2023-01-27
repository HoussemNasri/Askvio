import QuestionCard, {Question} from "../components/QuestionCard";
import {useGetFeedQuery} from "../redux/feedSlice";

export default function Home() {
    const {data, error, isLoading} = useGetFeedQuery()

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

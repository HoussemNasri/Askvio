import {useGetCommunityQuery} from "../redux/CommunitySlice";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Loader} from "../components/Loader";

export default function CommunityPage() {
    const params = useParams()
    const [name, setName] = useState("")
    useEffect(() => {
        if (params && params.communityName) {
            setName(params.communityName)
        }
    }, [])

    const {data: communityData, isLoading: isLoadingCommunityData, status, error} = useGetCommunityQuery(name)

    if (isLoadingCommunityData) {
        return <Loader resourceName="Community Data"/>
    }

    if (error) {
        return <p>Error!</p>
    }

    return (
        <div>
            {communityData && <div className="flex flex-col w-[80%] h-80 bg-amber-300 items-center justify-center">
                <p className="text-4xl font-bold text-stone-900">{communityData.displayName}</p>
                <p className="text-sm font-medium text-stone-800">{`v/${communityData.name}`}</p>
            </div>}
        </div>)
}

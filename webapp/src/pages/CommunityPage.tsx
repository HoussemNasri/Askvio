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

    if (error || !communityData) {
        return <p>Error!</p>
    }

    return (
        <div className="w-100 flex-auto flex flex-col">
            <div className="flex-auto flex-col w-100 h-36 bg-amber-300"></div>
            <div className="flex flex-row  items-end justify-center w-[100%] -mt-14 gap-3">
                <img className="w-36 h-36 rounded-full"
                     src={`https://api.dicebear.com/5.x/bottts/svg?seed=${communityData.name}`}
                     alt="Rounded avatar"/>
                <div className="flex flex-col mb-3 gap-2">
                    <div className="flex flex-row justify-center gap-5 items-center">
                        <p className="text-4xl font-bold text-stone-900">{communityData.displayName}</p>
                        <button type="button"
                                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium
                                rounded-full text-sm px-5 py-2.5 dark:bg-purple-600
                                  dark:hover:bg-purple-700">Join</button>
                    </div>
                    <p className="text-sm font-medium text-neutral-500">{`v/${communityData.name}`}</p>
                </div>
            </div>
        </div>)
}

import {CommunityResponse} from "../../redux/types";
import moment from 'moment';

export interface AboutCommunityProps {
    community: CommunityResponse;

}

function formattedDate(date: Date) {
    return moment(date).format("MMMM DD, YYYY")
}
export default function AboutCommunity({community}: AboutCommunityProps) {

    return <div className="flex flex-col w-80 rounded-b-2xl">
        <p className="text-white bg-purple-700 w-full pt-5 pb-4 pl-4 rounded-t-md font-semibold text-sm">About Community</p>
        <div className="flex flex-col h-96 bg-gray-50 border shadow border-gray-200 rounded-b-md gap-3 p-3">
            <p className="text-base">{community.about}</p>
            <p className="text-neutral-500">Created {formattedDate(community.creationDate)}</p>
            <hr/>
            <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-full
             text-sm px-5 py-2 my-2 text-center">Ask Now!</button>
            <hr/>
        </div>
    </div>
}

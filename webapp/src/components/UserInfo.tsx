import {UserResponse} from "../redux/types";
import {convertToRelativeDate} from "../utils/DateUtils";

interface UserInfoProps {
    userDetails: UserResponse,
    action: string,
    actionTime: Date,
    isOwner: boolean
}

export default function UserInfo({userDetails, action, actionTime, isOwner = false}: UserInfoProps) {
    const {firstname, lastname, avatar} = userDetails
    return (
        <div className={`flex flex-col w-52 p-2 gap-1 rounded ${isOwner && 'bg-[#D9EAF7]'}`}>
            <div className="flex flex-row text-xs text-gray-600 gap-1">
                <p>{action}</p>
                <p>{convertToRelativeDate(actionTime)}</p>
            </div>
            <div className="flex flex-row align-top gap-2">
                <img className="w-8 h-8 rounded" src={avatar} alt="User avatar"/>
                <p className="text-sky-700 text-sm">{firstname} {lastname}</p>
            </div>
        </div>
    )
}

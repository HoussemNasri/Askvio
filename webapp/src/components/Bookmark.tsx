import {FaRegBookmark, FaBookmark} from "react-icons/fa";
import {useState} from "react";

interface BookmarkProps {
    bookmarked?: boolean
}

export default function Bookmark({bookmarked = false}: BookmarkProps) {
    const [isBookmarked, setIsBookmarked] = useState(bookmarked)

    return isBookmarked ? <FaBookmark className="h-5 w-5 text-gray-400"/> :
        <FaRegBookmark className="h-5 w-5 text-gray-400"/>
}

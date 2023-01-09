import {AiFillHome} from 'react-icons/ai'
import {Link, useLocation} from "react-router-dom";
import {FaHandPaper} from "react-icons/fa";
import {RiChatPollFill, RiProfileFill, RiUserSearchFill} from "react-icons/ri";
import {HiUserGroup} from "react-icons/hi";
import {IoMdPricetags, IoMdHelpBuoy} from "react-icons/io";
import {GiTrophy} from "react-icons/gi";
import {BsQuestionSquareFill} from "react-icons/bs";

export default function Sidebar() {
    const location = useLocation()

    const Menus = [
        {title: 'Home', path: '/', src: <AiFillHome/>},
        {title: 'Ask Question', path: '/ask', src: <FaHandPaper/>},
        {title: 'Profile', path: '/profile', src: <RiProfileFill/>},
        {title: 'Communities', path: '/communities', src: <HiUserGroup/>},
        {title: 'Questions', path: '/questions', src: <BsQuestionSquareFill/>},
        {title: 'Polls', path: '/polls', src: <RiChatPollFill/>},
        {title: 'Tags', path: '/tags', src: <IoMdPricetags/>},
        {title: 'Badges', path: '/badges', src: <GiTrophy/>},
        {title: 'Users', path: '/users', src: <RiUserSearchFill/>},
        {title: 'Help', path: '/help', src: <IoMdHelpBuoy/>},
    ]

    return (
        <>
            <aside
                className={`w-60 fixed sm:block h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <ul className='gap-1 flex flex-col'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-4 p-3 text-base font-medium rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700  ${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'}`}>
                                <span className='text-xl'>{menu.src}</span>
                                <span
                                    className={`origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </aside>
        </>
    )
}

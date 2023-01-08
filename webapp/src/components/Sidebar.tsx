import {SiOpenaccess, SiFuturelearn} from "react-icons/si";
import {CgProfile} from 'react-icons/cg'
import {AiFillPieChart} from 'react-icons/ai'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

export default function Sidebar() {
    const location = useLocation()

    const Menus = [
        {title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart/>},
        {title: 'Course', path: '/course', src: <SiFuturelearn/>},
        {title: 'Profile', path: '/profile', src: <CgProfile/>},
        {title: 'Signin', path: '/login', src: <SiOpenaccess/>, gap: 'true'},
    ]

    return (
        <>
            <aside
                className={`w-60 fixed sm:block h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <Link to='/'>
                    <div className={`flex ${'gap-x-4'} items-center`}>
                        {(
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                Goal Quest
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
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

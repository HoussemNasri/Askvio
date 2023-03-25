import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

type Props = {
    children: React.ReactElement
}

export default function Layout() {
    return (
        <>
            <div className="h-screen w-screen">
                <Navbar/>
                <div className="grow flex flex-auto h-screen mt-[72px]">
                    <Sidebar/>
                    <div className=" flex-auto p-5 ml-60 m-5 pr-20 mb-36 h-100 w-100">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>)
}

import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
    children: React.ReactElement
}

export default function Layout({children}: Props) {
    return (
        <>
            <div className="">
                <Navbar/>
                <div className="grow flex flex-auto">
                    <Sidebar/>
                    <div className=" p-5 ml-60 m-5">{children}</div>
                </div>
            </div>
        </>)
}

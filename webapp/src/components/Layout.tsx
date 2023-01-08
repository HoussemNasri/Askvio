import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
    children: React.ReactElement
}

export default function Layout({children}: Props) {
    return (
        <>
            <div className="flex flex-auto">
                <Sidebar/>
                <div className="grow">
                    <Navbar/>
                    <div className="m-5">{children}</div>
                </div>
            </div>
        </>)
}

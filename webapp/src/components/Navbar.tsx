import logo from '../logo.png'
import {Link} from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
    return <>
        <nav className="h-[72px] flex flex-auto bg-stone-900 pl-5 fixed left-0 right-0 top-0 z-30">
            <Link to="/">
                <div className="p-4 w-60 flex items-center">
                    <img src={logo} alt="App Logo" className="h-[42px] object-center object-contain"/>
                </div>
            </Link>
            <Searchbar/>
            <div className="w-60 text-center flex items-center text-white">
                Notifications and stuff
            </div>
        </nav>
    </>
}

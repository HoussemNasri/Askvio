import logo from '../logo.png'

export default function Navbar() {
    return <>
        <nav className="flex flex-auto h-[72px] bg-gray-900 pl-5 w-100 sticky top-0 z-30">
                <div className="w-60 flex items-center">
                    <img src={logo} alt="App Logo" className="h-[42px] object-center object-contain"/>
                </div>
                <ul className="flex flex-row gap-6 text-amber-50 items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
        </nav>
    </>
}

import { FaPlus, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkMode();


    return (
        <nav className={`sticky top-0 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        <div>
                            <Link to="/" className={`flex items-center py-5 px-2 ${darkMode ? "text-white" : "text-gray-700"} hover:text-gray-900`}>
                                <img width={30} src="https://media.istockphoto.com/id/1531141530/vector/exit-polling-icon-vector-illustration-eps-10.jpg?s=612x612&w=0&k=20&c=pxgaIH18e1nSFvhOv9TnCuJ5ZD_vYTK7SMu30UkSswI=" alt="" />
                                <span className="font-bold">Vanish Vote</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/" className={`py-5 px-3 ${darkMode ? "text-white" : "text-gray-700"} hover:text-gray-900`}>All Polls</Link>
                            <Link to="/my-polls" className={`py-5 px-3 ${darkMode ? "text-white" : "text-gray-700"} hover:text-gray-900`}>My Polls</Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center">
                            <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white p-2 rounded-full">
                                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                            </button>
                        </div>
                        <Link to={'/create-poll'} className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition">
                            <FaPlus />
                            Create Poll
                        </Link>
                    </div>

                </div>
            </div>

            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>
        </nav>
    )
}

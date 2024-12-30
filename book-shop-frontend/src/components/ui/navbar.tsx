import { useState } from "react";
import { Button } from "./button";
import { Link, useNavigate } from "react-router-dom";


export default function navbar() {
    const menuList = [{value : "home", route : "/"}, {value : "profile", route : "/profile"}]
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-white shadow-md fixed w-full z-10 h-auto block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-blue-600">Logo</a>
                    </div>

                    {/* Menu Toggle Button (Mobile) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navbar Links */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {
                            menuList.map((item) => (
                                <Link to={item.route} className="text-gray-700 hover:text-blue-600" >{item.value}</Link>
                            ) )
                        }
                    </div>
                    <Button onClick={() => navigate('/login')}>Login</Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    {
                        menuList.map((item) => (
                            <Link to={item.route} className="block px-4 py-2 text-gray-700 hover:bg-gray-100" >{item.value}</Link>
                        ))
                    }
                </div>
            )}
        </nav>
    );
}

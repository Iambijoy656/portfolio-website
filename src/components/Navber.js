import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const listItems = (
        <>
            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    About
                </Link>
            </li>

            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    Education
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    Certifications
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-600"
                >
                    Contact
                </Link>
            </li>
            {/* <li>
                <button>
                    <BsSun />
                </button>
            </li> */}
        </>
    );

    return (

        <div className="container mx-auto relative flex items-center justify-between px-10 mb-10">
            <Link to="/" className="inline-flex items-center">
                <img className="w-40" src={logo} alt="" />
            </Link>

            <ul className="flex items-center hidden space-x-8 lg:flex">
                {listItems}
            </ul>
            <div className="lg:hidden">
                <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full">
                        <div className="p-5 bg-white border rounded shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <Link
                                        to="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                    >
                                        <img className="w-40" src={logo} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className="space-y-4">{listItems}</ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Navber;
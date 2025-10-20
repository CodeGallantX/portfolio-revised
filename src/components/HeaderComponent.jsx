"use client"
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <header className="">
                <div className="z-30 px-6 md:px-10 xl:px-16 py-4 fixed backdrop-blur-md w-11/12 md:w-10/12 lg:w-4/5 left-1/2 -translate-x-1/2 bg-gray-100 shadow-md bg-opacity-30 top-6 rounded-full flex items-center justify-between ">
                    <a href="/" className="text-2xl md:text-3xl font-medium font-outfit">
                    John Samuel
                    </a>

                    <nav className="hidden lg:flex items-center gap-8 font-normal">
                        <a href="/about">About</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/blog">Blog</a>
                        <a
                            href="/John_Samuel_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-[#cf5638] transition"
                        >
                            View Resume
                        </a>
                    </nav>

                    <button onClick={toggleSidebar} className="lg:hidden text-3xl text-black">
                        <HiMenuAlt4 />
                    </button>
                </div>
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-primary bg-opacity-30 backdrop-blur-md"
                        onClick={toggleSidebar}
                    ></div>
                )}

                <div
                    className={`fixed inset-0 z-50 bg-black bg-opacity-80  backdrop-blur-md text-white flex flex-col items-center justify-center transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
                        <IoMdClose />
                    </button>
                    <nav className="flex flex-col items-center space-y-8 text-lg">
                        <a href="/about" onClick={toggleSidebar} className="hover:text-primary">
                            About
                        </a>
                        <a href="/portfolio" onClick={toggleSidebar} className="hover:text-primary">
                            Portfolio
                        </a>
                        <a href="/blog" onClick={toggleSidebar} className="hover:text-primary">
                            Blog
                        </a>
                        <a
                            href="/JOHN_SAMUEL_RESUME.pdf"
                            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-[#cf5638] transition"
                            onClick={toggleSidebar}
                        >
                            View Resume
                        </a>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;

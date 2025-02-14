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
            <header className="fixed w-4/5 bg-white shadow-md rounded-full left-1/2 -translate-x-1/2 top-8 z-30 flex items-center justify-between px-6 md:px-10 py-6">
                <a href="/" className="text-3xl font-bold font-outfit">
                    <span>John Samuel</span>
                </a>

                <nav className="hidden lg:flex items-center gap-8 font-normal">
                    <a href="/about">About</a>
                    <a href="/features">Portfolio</a>
                    <a href="/contact">Blog</a>
                    <a
                        href="/JOHN_SAMUEL_RESUME.pdf"
                        className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-[#cf5638] transition"
                    >
                        View Resume
                    </a>
                </nav>

                <button onClick={toggleSidebar} className="lg:hidden text-3xl text-black">
                    <HiMenuAlt4 />
                </button>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
                        onClick={toggleSidebar}
                    ></div>
                )}

                <div
                    className={`fixed inset-0 z-50 bg-[#24201D] flex flex-col items-center justify-center transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
                        <IoMdClose />
                    </button>
                    <nav className="flex flex-col items-center space-y-8 text-lg">
                        <a href="/about" onClick={toggleSidebar} className="hover:text-[#e76f51]">
                            About
                        </a>
                        <a href="/features" onClick={toggleSidebar} className="hover:text-[#e76f51]">
                            Portfolio
                        </a>
                        <a href="/contact" onClick={toggleSidebar} className="hover:text-[#e76f51]">
                            Blog
                        </a>
                        <a
                            href="/login"
                            className="bg-[#e76f51] text-white px-6 py-3 rounded-full hover:bg-[#cf5638] transition"
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
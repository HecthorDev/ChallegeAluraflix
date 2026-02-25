import React from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { FiPlus } from 'react-icons/fi';

const Header = ({ currentPath = '/' }) => {
    return (
        <header className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-brand-blue bg-brand-dark/90 backdrop-blur-md px-4 py-3 md:sticky md:top-0 md:bottom-auto md:border-t-0 md:border-b-4 lg:px-12">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a href="/" className="hidden md:block transition-transform hover:scale-105">
                    <img src="/assets/logo.png" alt="AluraFlix Logo" className="h-10 w-auto" />
                </a>

                <nav className="w-full md:w-auto">
                    <ul className="flex items-center justify-around gap-2 md:justify-end md:gap-6">
                        <li>
                            <a
                                href="/"
                                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 transition-all md:px-8 ${currentPath === '/'
                                    ? 'border-brand-blue bg-brand-dark text-brand-blue shadow-brand'
                                    : 'border-white text-white hover:border-brand-blue hover:text-brand-blue'
                                    }`}
                            >
                                <span className="hidden md:block font-bold">HOME</span>
                                <GrHomeRounded className="text-2xl md:hidden" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/newvideo"
                                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 transition-all md:px-8 ${currentPath === '/newvideo'
                                    ? 'border-brand-blue bg-brand-dark text-brand-blue shadow-brand'
                                    : 'border-white text-white hover:border-brand-blue hover:text-brand-blue'
                                    }`}
                            >
                                <span className="hidden md:block font-bold">NUEVO VIDEO</span>
                                <FiPlus className="text-2xl md:hidden" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

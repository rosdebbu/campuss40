
import React from 'react';

const LogoIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_1_2)"/>
        <path d="M16 8L12 12V20H20V12L16 8Z" fill="white"/>
        <path d="M16 24C17.1046 24 18 23.1046 18 22C18 20.8954 17.1046 20 16 20C14.8954 20 14 20.8954 14 22C14 23.1046 14.8954 24 16 24Z" fill="#FDE68A"/>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#92400E"/>
                <stop offset="1" stopColor="#B45309"/>
            </linearGradient>
        </defs>
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="bg-white py-3 px-4 sm:px-6 lg:px-8 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <LogoIcon />
                    <div>
                        <h1 className="text-lg font-bold text-stone-800">LocalAlert Pro</h1>
                        <p className="text-xs text-stone-500">SRMIST Potheri • Smart Campus</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm text-stone-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v1.5a.5.5 0 001 0V4a1 1 0 112 0v1.5a.5.5 0 001 0V4a1 1 0 112 0v1.5a.5.5 0 001 0V4a1 1 0 011-1 .999.999 0 011 1v.01a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 14a1 1 0 01-1-1v-1.5a.5.5 0 00-1 0V16a1 1 0 11-2 0v-1.5a.5.5 0 00-1 0V16a1 1 0 11-2 0v-1.5a.5.5 0 00-1 0V16a1 1 0 01-1 1 .999.999 0 01-1-1v-.01a1 1 0 011-1h12a1 1 0 011 1V16a1 1 0 01-1 1zM10 6a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                        </svg>
                        <span>28°C Sunny</span>
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-xs items-center justify-center">1</span>
                        </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-sm">DB</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
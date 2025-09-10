
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text and Search */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-800 leading-tight">
                            Your Campus Compass
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 text-stone-600">
                            Navigate SRMIST Potheri with AI-powered assistance and real-time updates.
                        </p>
                        <div className="mt-8 w-full max-w-lg mx-auto lg:mx-0 relative">
                            <input
                                type="text"
                                placeholder="Search campus facilities..."
                                className="w-full py-4 pl-6 pr-16 rounded-full text-stone-700 placeholder-stone-500 bg-stone-100 focus:outline-none focus:ring-4 focus:ring-amber-300 transition duration-300 border border-transparent focus:border-amber-400"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-800 hover:bg-amber-900 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Right Column: Image */}
                    <div className="hidden lg:block">
                        <img 
                            src="https://picsum.photos/seed/campus-life/600/500" 
                            alt="Students on a university campus" 
                            className="rounded-2xl shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
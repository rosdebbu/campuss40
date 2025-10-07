import React from 'react';

const LogoIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_footer)"/>
        <path d="M16 8L12 12V20H20V12L16 8Z" fill="white"/>
        <path d="M16 24C17.1046 24 18 23.1046 18 22C18 20.8954 17.1046 20 16 20C14.8954 20 14 20.8954 14 22C14 23.1046 14.8954 24 16 24Z" fill="#FFD3B5"/>
        <defs>
            <linearGradient id="paint0_linear_footer" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A8E6CE"/>
                <stop offset="1" stopColor="#FF8C94"/>
            </linearGradient>
        </defs>
    </svg>
);

interface FooterProps {
    onFeedbackClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onFeedbackClick }) => {
    return (
        <footer className="bg-teal-800 text-lime-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="md:col-span-1">
                         <div className="flex items-center mb-4">
                            <LogoIcon />
                            <h2 className="text-xl font-bold text-white">LocalAlert Pro</h2>
                        </div>
                        <p className="text-sm text-lime-100 max-w-xs">
                            Empowering SRMIST Potheri students with AI-powered campus navigation, real-time updates, and seamless connectivity for a smarter campus experience.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">QUICK ACCESS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Transportation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Food & Dining</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Campus Map</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">SUPPORT</h3>
                         <ul className="space-y-3 text-sm">
                             <li className="flex items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                Emergency: 112
                             </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                support@localalert.edu
                            </li>
                             <li>
                                <button onClick={onFeedbackClick} className="flex items-center hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    Send Feedback
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-teal-700 pt-6 text-center text-sm text-lime-100">
                    <p>&copy; {new Date().getFullYear()} LocalAlert Pro - SRMIST Potheri. All rights reserved.</p>
                    <p>Made with <span className="text-red-400">&hearts;</span> for students.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
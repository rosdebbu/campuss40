import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import QuickNav from './components/QuickNav';
import CampusGallery from './components/CampusGallery';
import CampusFacilities from './components/CampusFacilities';
import SrmGlobalHospital from './components/SrmGlobalHospital';
import InteractiveMap from './components/InteractiveMap';
import CampusLifeEvents from './components/CampusLifeEvents';
import UpcomingEvents from './components/UpcomingEvents';
import CampusNews from './components/CampusNews';
import CommunityForum from './components/CommunityForum';
import Footer from './components/Footer';
import CafeFinder from './components/CafeFinder';
import FeedbackModal from './components/FeedbackModal';


// --- Login Modal Component ---
interface LoginModalProps {
    onClose: () => void;
    onLogin: () => void;
}

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const GoogleIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.841C34.524 4.962 29.563 2.5 24 2.5C11.318 2.5 1.706 12.118 1.706 24.8s9.612 22.3 22.294 22.3c12.683 0 22.294-9.612 22.294-22.3c0-1.54-.153-3.038-.438-4.417z"/>
        <path fill="#FF3D00" d="M6.306 14.691L12.55 19.348C14.657 12.593 20.125 8.1 26.604 8.1l-2.6-2.6C16.84 4.093 10.387 7.746 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 47.3c5.563 0 10.524-1.962 14.804-5.841L31.043 35.617c-2.119 1.883-4.902 3.039-7.961 3.039c-5.223 0-9.651-3.657-11.303-8.312l-6.244 4.657C8.387 42.254 15.225 47.3 24 47.3z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.387-2.235 4.33-4.163 5.662l6.244 4.657C43.082 34.691 46.25 28.3 46.25 20c0-1.54-.153-3.038-.438-4.417z"/>
    </svg>
);

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
        >
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
                onClick={e => e.stopPropagation()}
                style={{ animationFillMode: 'forwards' }}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 transition-colors" aria-label="Close login modal">
                    <CloseIcon />
                </button>

                <div className="text-center">
                    <h2 id="login-modal-title" className="text-3xl font-bold text-rose-900">Welcome Back</h2>
                    <p className="text-rose-600 mt-2">Log in to access your saved places and preferences.</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-rose-800">Email Address</label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="you@srmist.edu.in"
                            className="w-full mt-1 py-3 px-4 rounded-lg text-rose-800 placeholder-rose-300 bg-lime-100 focus:outline-none focus:ring-2 focus:ring-rose-400 border border-transparent focus:border-rose-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password-login" className="text-sm font-medium text-rose-800">Password</label>
                         <input 
                            id="password-login"
                            type="password" 
                            placeholder="••••••••"
                            className="w-full mt-1 py-3 px-4 rounded-lg text-rose-800 placeholder-rose-300 bg-lime-100 focus:outline-none focus:ring-2 focus:ring-rose-400 border border-transparent focus:border-rose-300"
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-rose-400 text-white font-semibold rounded-lg shadow-md hover:bg-rose-500 transition-all duration-300 transform hover:scale-105">
                        Log In
                    </button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-rose-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-rose-600">Or continue with</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center py-3 border border-rose-200 text-rose-800 font-semibold rounded-lg hover:bg-lime-50 transition-colors">
                        <GoogleIcon /> Login with Google
                    </button>
                    <button className="w-full py-3 bg-red-300 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors">
                        Login with SRMNet
                    </button>
                </div>

                <div className="text-center mt-6">
                    <button onClick={onClose} className="text-sm text-rose-500 hover:text-rose-700 hover:underline">
                        Continue as Guest
                    </button>
                </div>
                
                 <style>{`
                    @keyframes fade-in-scale {
                        from {
                            transform: scale(0.95);
                            opacity: 0;
                        }
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    .animate-fade-in-scale {
                        animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                `}</style>
            </div>
        </div>
    );
};


// --- Main App Component ---
interface User {
  name: string;
  initials: string;
}

const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    // In a real app, this would involve auth logic
    setUser({ name: 'Daniel Boone', initials: 'DB' });
    setIsLoginModalOpen(false);
  };
  
  const handleFeedbackSubmit = () => {
    // In a real app, this would send data to a server
    setIsFeedbackModalOpen(false);
    alert('Thank you for your feedback!');
  };
  
  return (
    <div className="bg-white">
      <Header 
        user={user}
        onProfileClick={() => setIsLoginModalOpen(true)} 
      />
      <main>
        <Hero />
        <QuickNav />
        <CampusGallery />
        <CampusFacilities />
        <SrmGlobalHospital />
        <InteractiveMap />
        <CafeFinder />
        <CampusLifeEvents />
        <UpcomingEvents />
        <CampusNews />
        <CommunityForum />
      </main>
      <Footer onFeedbackClick={() => setIsFeedbackModalOpen(true)} />
      {isLoginModalOpen && (
        <LoginModal 
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      )}
      {isFeedbackModalOpen && (
        <FeedbackModal 
          onClose={() => setIsFeedbackModalOpen(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default App;
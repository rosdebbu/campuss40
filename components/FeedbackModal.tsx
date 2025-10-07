import React, { useState } from 'react';

// --- Icons ---
const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SuggestionIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const BugIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-3-5v5m-3-8v8M9 9l.55.55M12 12l.55.55M15 15l.55.55M18 8l-6 6-6-6" />
    </svg>
);

const GeneralIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);


interface FeedbackModalProps {
    onClose: () => void;
    onSubmit: () => void;
}

type FeedbackType = 'Suggestion' | 'Bug Report' | 'General';

const FeedbackModal: React.FC<FeedbackModalProps> = ({ onClose, onSubmit }) => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType>('Suggestion');

    const feedbackOptions: { name: FeedbackType, icon: React.FC }[] = [
        { name: 'Suggestion', icon: SuggestionIcon },
        { name: 'Bug Report', icon: BugIcon },
        { name: 'General', icon: GeneralIcon },
    ];

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically get form data and send it
        onSubmit();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
        >
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
                onClick={e => e.stopPropagation()}
                style={{ animationFillMode: 'forwards' }}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 transition-colors" aria-label="Close feedback form">
                    <CloseIcon />
                </button>

                <div className="text-center">
                    <h2 id="feedback-modal-title" className="text-3xl font-bold text-rose-900">Share Your Feedback</h2>
                    <p className="text-rose-600 mt-2">We value your input. Help us improve LocalAlert Pro!</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label className="text-sm font-medium text-rose-800 mb-2 block">Feedback Type</label>
                        <div className="grid grid-cols-3 gap-3">
                            {feedbackOptions.map(option => (
                                <button
                                    key={option.name}
                                    type="button"
                                    onClick={() => setFeedbackType(option.name)}
                                    className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 ${feedbackType === option.name ? 'border-rose-400 bg-lime-50 text-rose-600' : 'border-lime-200 bg-white text-rose-500 hover:border-rose-300'}`}
                                >
                                    <option.icon />
                                    <span className="text-sm font-semibold mt-1.5">{option.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="feedback-message" className="text-sm font-medium text-rose-800">Your Message</label>
                        <textarea 
                            id="feedback-message"
                            placeholder="Tell us what's on your mind..."
                            rows={5}
                            required
                            className="w-full mt-1 py-3 px-4 rounded-lg text-rose-800 placeholder-rose-300 bg-lime-100 focus:outline-none focus:ring-2 focus:ring-rose-400 border border-transparent focus:border-rose-300"
                        />
                    </div>

                     <div>
                        <label htmlFor="feedback-email" className="text-sm font-medium text-rose-800">Your Email (Optional)</label>
                        <p className="text-xs text-rose-500 mb-1">We may follow up for more details.</p>
                        <input 
                            id="feedback-email"
                            type="email" 
                            placeholder="you@srmist.edu.in"
                            className="w-full py-3 px-4 rounded-lg text-rose-800 placeholder-rose-300 bg-lime-100 focus:outline-none focus:ring-2 focus:ring-rose-400 border border-transparent focus:border-rose-300"
                        />
                    </div>

                    <button type="submit" className="w-full py-3 bg-rose-400 text-white font-semibold rounded-lg shadow-md hover:bg-rose-500 transition-all duration-300 transform hover:scale-105">
                        Submit Feedback
                    </button>
                </form>

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

export default FeedbackModal;
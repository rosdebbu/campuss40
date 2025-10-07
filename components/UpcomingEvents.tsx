
import React from 'react';

// --- ICONS ---
const TimeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// --- 3D Style Icons ---
const TechIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="tech-grad" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFAAA6"/>
                <stop offset="1" stopColor="#FF8C94"/>
            </linearGradient>
            <filter id="tech-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#FF8C94" floodOpacity="0.4"/>
            </filter>
        </defs>
        <g style={{ filter: 'url(#tech-shadow)' }}>
            <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#tech-grad)"/>
            <rect x="18" y="18" width="28" height="28" rx="4" fill="#A56A68"/>
            <path d="M25 18V16H39V18H25Z" fill="#FFD3B5"/>
            <path d="M25 46V48H39V46H25Z" fill="#FFD3B5"/>
            <path d="M18 25H16V39H18V25Z" fill="#FFD3B5"/>
            <path d="M46 25H48V39H46V25Z" fill="#FFD3B5"/>
        </g>
    </svg>
);
const ArtIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="art-grad" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A8E6CE"/>
                <stop offset="1" stopColor="#DCEDC2"/>
            </linearGradient>
            <filter id="art-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#A8E6CE" floodOpacity="0.4"/>
            </filter>
        </defs>
        <g style={{ filter: 'url(#art-shadow)' }}>
            <path d="M32 8C19.5 8 12 20 12 28C12 44 32 56 32 56C32 56 52 44 52 28C52 20 44.5 8 32 8Z" fill="url(#art-grad)"/>
            <circle cx="24" cy="24" r="5" fill="#FFD3B5"/>
            <circle cx="40" cy="24" r="5" fill="#FFAAA6"/>
            <circle cx="32" cy="36" r="6" fill="#FF8C94"/>
        </g>
    </svg>
);
const LectureIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
         <defs>
            <linearGradient id="lecture-grad" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD3B5"/>
                <stop offset="1" stopColor="#FFAAA6"/>
            </linearGradient>
            <filter id="lecture-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#FFAAA6" floodOpacity="0.4"/>
            </filter>
        </defs>
        <g style={{ filter: 'url(#lecture-shadow)' }}>
            <path d="M12 52H52V48C52 45.7909 50.2091 44 48 44H16C13.7909 44 12 45.7909 12 48V52Z" fill="#B28574"/>
            <path d="M16 12H48L44 44H20L16 12Z" fill="url(#lecture-grad)"/>
            <rect x="30" y="16" width="4" height="20" rx="2" fill="#FFFFFF"/>
        </g>
    </svg>
);


const events = [
    {
        title: 'Tech Symposium',
        subtitle: 'AI & Machine Learning Conference',
        time: 'Today, 5:00 PM',
        location: 'TP Ganesan Auditorium',
        Icon: TechIcon,
        buttonText: 'Join Event',
        buttonColor: 'bg-rose-400 hover:bg-rose-500'
    },
    {
        title: 'Art Exhibition',
        subtitle: 'Student Creative Showcase',
        time: 'Tomorrow, 10:00 AM',
        location: 'Library Gallery',
        Icon: ArtIcon,
        buttonText: 'View Details',
        buttonColor: 'bg-teal-300 hover:bg-teal-400'
    },
    {
        title: 'Guest Lecture Series',
        subtitle: 'Industry Leaders Talk',
        time: 'Friday, 2:00 PM',
        location: 'SJT Building',
        Icon: LectureIcon,
        buttonText: 'Register',
        buttonColor: 'bg-red-300 hover:bg-red-400'
    }
];

const EventCard: React.FC<{ event: typeof events[0] }> = ({ event }) => (
    <div className="group" style={{ perspective: '1000px' }}>
        <div className="bg-lime-50 rounded-2xl shadow-lg p-6 transform-style-preserve-3d transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-y-0 transform rotate-y-[-10deg] flex items-center space-x-6">
            <div className="flex-shrink-0">
                <event.Icon />
            </div>
            <div className="flex-grow">
                 <h3 className="font-bold text-2xl text-rose-900">{event.title}</h3>
                 <p className="text-rose-600 mb-4">{event.subtitle}</p>
                 <div className="flex flex-col sm:flex-row sm:items-center text-sm text-rose-700 space-y-2 sm:space-y-0 sm:space-x-6">
                    <span className="flex items-center"><TimeIcon /> {event.time}</span>
                    <span className="flex items-center"><LocationIcon /> {event.location}</span>
                </div>
            </div>
            <div className="flex-shrink-0">
                 <button className={`px-5 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform group-hover:scale-110 ${event.buttonColor}`}>
                    {event.buttonText}
                </button>
            </div>
        </div>
    </div>
);


const UpcomingEvents: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <style>{`
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .rotate-y-\\[-10deg\\] {
                    transform: rotateY(-10deg);
                }
                .group:hover .rotate-y-\\[-10deg\\] {
                    transform: rotateY(0deg) scale(1.05);
                }
            `}</style>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-rose-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Upcoming Campus Events</h2>
                    </div>
                     <p className="text-lg text-rose-600 max-w-2xl mx-auto">Don't miss out on what's happening next on campus.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                   {events.map((event, index) => (
                       <EventCard key={index} event={event} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
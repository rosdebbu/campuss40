import React from 'react';

// --- ICONS ---
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.284-1.255-.758-1.685M12 12a3 3 0 100-6 3 3 0 000 6zM6 20v-2a3 3 0 015.356-1.857M6 20H2v-2a3 3 0 015-2.828" /></svg>;
const PrizeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
const StageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const MedalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;

const events = [
    {
        title: 'Annual Tech Fest',
        imageUrl: 'https://picsum.photos/seed/techfest/500/700',
        details: [
            { icon: CalendarIcon, text: 'February 2025' },
            { icon: UsersIcon, text: '50,000+ Participants' },
            { icon: PrizeIcon, text: '₹10 Lakhs Prize Money' },
        ],
        buttonText: 'Learn More',
    },
    {
        title: 'Cultural Extravaganza',
        imageUrl: 'https://picsum.photos/seed/culturefest/500/700',
        details: [
            { icon: CalendarIcon, text: 'October 2024' },
            { icon: StageIcon, text: 'Celebrity Performances' },
            { icon: UsersIcon, text: '25+ Events' },
        ],
        buttonText: 'Explore Events',
    },
    {
        title: 'Athletic Championships',
        imageUrl: 'https://picsum.photos/seed/sportsfest/500/700',
        details: [
            { icon: CalendarIcon, text: 'March 2025' },
            { icon: MedalIcon, text: 'Inter-College Competitions' },
            { icon: UsersIcon, text: '20+ Sports Events' },
        ],
        buttonText: 'Register Now',
    }
];

const EventCard: React.FC<{ event: typeof events[0], index: number }> = ({ event, index }) => {
    // Determine rotation based on index for a fan-out effect
    const rotationClass = index === 0 ? 'card-left' : index === 2 ? 'card-right' : 'card-center';

    return (
        <div className={`event-card-container ${rotationClass}`}>
            <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden transform-style-3d transition-transform duration-500">
                <img src={event.imageUrl} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-6 text-white w-full transform translate-z-20">
                    <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">{event.title}</h3>
                    <ul className="space-y-3 mb-6">
                        {event.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-lime-100 drop-shadow-sm">
                                <detail.icon />
                                <span>{detail.text}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300">
                        {event.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

const CampusLifeEvents: React.FC = () => {
    return (
        <section className="py-20 bg-lime-100">
            <style>{`
                .perspective-container {
                    perspective: 1200px;
                }
                .event-card-container {
                    transform-style: preserve-3d;
                    transition: transform 0.5s;
                    height: 500px;
                }
                .event-card-container:hover {
                    transform: translateZ(40px);
                }
                .card-left .relative { transform: rotateY(15deg) scale(0.95); }
                .card-left:hover .relative { transform: rotateY(0deg) scale(1); }
                
                .card-center .relative { transform: scale(1); }
                .card-center:hover .relative { transform: scale(1.05) translateZ(20px); }

                .card-right .relative { transform: rotateY(-15deg) scale(0.95); }
                .card-right:hover .relative { transform: rotateY(0deg) scale(1); }
            `}</style>
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-rose-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Campus Life & Events</h2>
                    </div>
                    <p className="text-lg text-rose-600 max-w-2xl mx-auto">Join amazing events, festivals, and activities that make SRMIST campus life memorable</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
                    {events.map((event, index) => (
                       <EventCard key={event.title} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusLifeEvents;
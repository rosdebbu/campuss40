import React from 'react';

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.284-1.255-.758-1.685M12 12a3 3 0 100-6 3 3 0 000 6zM6 20v-2a3 3 0 015.356-1.857M6 20H2v-2a3 3 0 015-2.828" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

// Define a specific type for the event colors to ensure type safety
type EventColor = 'brown' | 'green' | 'beige';

const events: { title: string; details: string[]; color: EventColor; buttonText: string }[] = [
    {
        title: 'Annual Tech Fest',
        details: ['February 2025', '50,000+ Participants', '₹10 Lakhs Prize Money'],
        color: 'brown',
        buttonText: 'Learn More',
    },
    {
        title: 'Cultural Extravaganza',
        details: ['October 2024', 'Celebrity Performances', '25+ Events'],
        color: 'green',
        buttonText: 'Explore Events',
    },
    {
        title: 'Athletic Championships',
        details: ['March 2025', 'Inter-College Competitions', '20+ Sports Events'],
        color: 'beige',
        buttonText: 'Register Now',
    }
];

const EventCard: React.FC<{event: typeof events[0]}> = ({ event }) => {
    const cardColor: Record<EventColor, string> = {
        brown: 'from-amber-700 to-amber-900',
        green: 'from-stone-600 to-stone-800',
        beige: 'from-orange-700 to-amber-900',
    };
    const buttonColor: Record<EventColor, string> = {
        brown: 'bg-amber-800 hover:bg-amber-900',
        green: 'bg-stone-700 hover:bg-stone-800',
        beige: 'bg-orange-800 hover:bg-orange-900',
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className={`bg-gradient-to-br ${cardColor[event.color]} text-white p-6 h-36 flex items-end`}>
                <h3 className="text-2xl font-bold">{event.title}</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
                <ul className="space-y-3 text-stone-600">
                    {event.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                            <StarIcon />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
                <button className={`mt-6 w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${buttonColor[event.color]}`}>
                    {event.buttonText}
                </button>
            </div>
        </div>
    );
}

const CampusLifeEvents: React.FC = () => {
    return (
        <section className="py-20 bg-stone-100">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-amber-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800">Campus Life & Events</h2>
                    </div>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">Join amazing events, festivals, and activities that make SRMIST campus life memorable</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map(event => (
                       <EventCard key={event.title} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusLifeEvents;
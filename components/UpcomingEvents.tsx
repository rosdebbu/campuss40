
import React from 'react';

const events = [
    {
        title: 'Tech Symposium',
        subtitle: 'AI & Machine Learning Conference',
        time: 'Today, 5:00 PM',
        location: 'TP Ganesan Auditorium',
        iconColor: 'bg-amber-800',
        buttonText: 'Join Event',
        buttonColor: 'bg-amber-800 hover:bg-amber-900'
    },
    {
        title: 'Art Exhibition',
        subtitle: 'Student Creative Showcase',
        time: 'Tomorrow, 10:00 AM',
        location: 'Library Gallery',
        iconColor: 'bg-stone-600',
        buttonText: 'View Details',
        buttonColor: 'bg-stone-600 hover:bg-stone-700'
    },
    {
        title: 'Guest Lecture Series',
        subtitle: 'Industry Leaders Talk',
        time: 'Friday, 2:00 PM',
        location: 'SJT Building',
        iconColor: 'bg-amber-700',
        buttonText: 'Register',
        buttonColor: 'bg-amber-700 hover:bg-amber-800'
    }
];

const TimeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const UpcomingEvents: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-amber-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800">Upcoming Campus Events</h2>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                         <div className="absolute left-9 top-0 h-full w-0.5 bg-stone-200" aria-hidden="true"></div>
                        {events.map((event, index) => (
                            <div key={index} className="relative flex items-start space-x-6 pb-10">
                                <div className="relative z-10 flex items-center justify-center w-18 h-18">
                                    <div className={`${event.iconColor} w-14 h-14 rounded-full flex items-center justify-center text-white ring-8 ring-white`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.353a1.76 1.76 0 013.417-.592V5.882zM15.417 5.882V19.24a1.76 1.76 0 003.417.592l2.147-6.353a1.76 1.76 0 00-3.417-.592V5.882z" /></svg>
                                    </div>
                                </div>
                                <div className="flex-1 bg-stone-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-xl text-stone-800">{event.title}</h3>
                                        <p className="text-stone-500 mb-3">{event.subtitle}</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-stone-600 space-y-1 sm:space-y-0 sm:space-x-4">
                                            <span className="flex items-center"><TimeIcon /> {event.time}</span>
                                            <span className="flex items-center"><LocationIcon /> {event.location}</span>
                                        </div>
                                    </div>
                                    <button className={`hidden sm:block ml-4 px-5 py-2.5 rounded-lg text-white font-semibold transition-colors duration-300 ${event.buttonColor}`}>
                                        {event.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
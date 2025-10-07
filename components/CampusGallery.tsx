
import React, { useState } from 'react';
import type { GalleryItem, Hostel } from '../types';

// --- Building Detail Modal ---
interface BuildingDetailModalProps {
    building: GalleryItem;
    onClose: () => void;
}

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const BuildingDetailModal: React.FC<BuildingDetailModalProps> = ({ building, onClose }) => {
    const [activeFloor, setActiveFloor] = useState<string | null>(null);
    const [selectedHostel, setSelectedHostel] = useState<Hostel | null>(null);

    if (!building.buildingDetails) return null;

    const handleHostelClick = (hostel: Hostel) => {
        setSelectedHostel(hostel);
        setActiveFloor(null); // Reset floor selection when changing view
    };
    
    const handleBackClick = () => {
        setSelectedHostel(null);
        setActiveFloor(null);
    };

    const renderHostelView = () => {
        if (!selectedHostel) return null;
        const floorKeys = Object.keys(selectedHostel.floorData);

        return (
             <>
                {/* Header */}
                <div className="flex justify-between items-center border-b border-rose-200 pb-4 mb-4">
                    <div>
                         <button onClick={handleBackClick} className="text-sm text-rose-500 hover:text-rose-700 mb-1">
                            &larr; Back to Main Building
                        </button>
                        <h2 id="building-detail-title" className="text-2xl font-bold text-rose-900">{selectedHostel.name}</h2>
                    </div>
                    <button onClick={onClose} className="text-rose-400 hover:text-rose-600 transition-colors" aria-label="Close building details">
                        <CloseIcon />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                    {/* Floor List */}
                    <div className="md:col-span-1 bg-white rounded-xl p-4 overflow-y-auto">
                        <h3 className="text-lg font-semibold text-rose-800 mb-3">Floors</h3>
                        <ul className="space-y-2">
                            {floorKeys.map(floorKey => (
                                <li key={floorKey}>
                                    <button
                                        onClick={() => setActiveFloor(floorKey)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${activeFloor === floorKey ? 'bg-rose-400 text-white font-semibold' : 'text-rose-700 hover:bg-lime-100'}`}
                                    >
                                        {floorKey}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Room List */}
                    <div className="md:col-span-2 bg-white rounded-xl p-6 overflow-y-auto">
                        {activeFloor ? (
                            <div>
                                <h3 className="text-xl font-bold text-rose-900 mb-4">Rooms on {activeFloor}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedHostel.floorData[activeFloor].map((room, index) => (
                                        <div key={index} className="bg-lime-50 text-rose-800 font-mono text-sm px-3 py-1.5 rounded-md border border-lime-200">
                                            {room}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                             <div className="flex flex-col items-center justify-center h-full text-center">
                                <svg className="h-16 w-16 text-rose-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 9.925l.416-.555A4 4 0 0111.652 8h.696a4 4 0 013.436 1.37l.416.555M9 16v-5h6v5m-8-5h10" />
                                </svg>
                                <h3 className="text-xl font-semibold text-rose-800">Select a floor</h3>
                                <p className="text-rose-600 max-w-xs mt-1">Choose a floor to see the list of rooms.</p>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    };

    const renderMainBuildingView = () => {
        const floorKeys = Object.keys(building.buildingDetails!.floorData);
        return (
            <>
                {/* Header */}
                <div className="flex justify-between items-center border-b border-rose-200 pb-4 mb-4">
                    <h2 id="building-detail-title" className="text-2xl font-bold text-rose-900">{building.title}</h2>
                    <button onClick={onClose} className="text-rose-400 hover:text-rose-600 transition-colors" aria-label="Close building details">
                        <CloseIcon />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                    {/* Floor List & Other Info */}
                    <div className="md:col-span-1 bg-white rounded-xl p-4 overflow-y-auto">
                        <div>
                            <h3 className="text-lg font-semibold text-rose-800 mb-3">Floors</h3>
                            <ul className="space-y-2">
                                {floorKeys.map(floorKey => (
                                    <li key={floorKey}>
                                        <button
                                            onClick={() => setActiveFloor(floorKey)}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${activeFloor === floorKey ? 'bg-rose-400 text-white font-semibold' : 'text-rose-700 hover:bg-lime-100'}`}
                                        >
                                            {floorKey}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         {building.buildingDetails?.otherInfo && (
                            <div className="mt-6 pt-6 border-t border-rose-200">
                                <h3 className="text-lg font-semibold text-rose-800 mb-3">{building.buildingDetails.otherInfo.title}</h3>
                                <ul className="space-y-2">
                                    {building.buildingDetails.otherInfo.items.map((hostel, index) => (
                                         <li key={index}>
                                            <button 
                                                onClick={() => handleHostelClick(hostel)}
                                                className="w-full text-left text-rose-700 p-3 rounded-lg hover:bg-lime-100 transition-colors duration-200 flex items-start"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-rose-300 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                </svg>
                                                <span>{hostel.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Staff List */}
                    <div className="md:col-span-2 bg-white rounded-xl p-6 overflow-y-auto">
                        {activeFloor ? (
                            <div>
                                <h3 className="text-xl font-bold text-rose-900 mb-4">Details for {activeFloor}</h3>
                                <ul className="space-y-3">
                                    {building.buildingDetails!.floorData[activeFloor].map((person, index) => (
                                        <li key={index} className="bg-lime-50 p-3 rounded-md text-rose-800 border border-lime-200">
                                            {person}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <svg className="h-16 w-16 text-rose-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <h3 className="text-xl font-semibold text-rose-800">Select a floor</h3>
                                <p className="text-rose-600 max-w-xs mt-1">Choose a floor from the list on the left to see the details.</p>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    };


    return (
        <div
            className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="building-detail-title"
        >
            <div
                className="bg-lime-50 rounded-2xl shadow-xl w-full max-w-4xl h-[80vh] p-6 relative flex flex-col transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
                onClick={e => e.stopPropagation()}
                style={{ animationFillMode: 'forwards' }}
            >
                {selectedHostel ? renderHostelView() : renderMainBuildingView()}

                 <style>{`
                    @keyframes fade-in-scale {
                        from { transform: scale(0.95); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    .animate-fade-in-scale { animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
                `}</style>
            </div>
        </div>
    );
}

// --- Helper to generate hostel data ---
const generateHostelData = (floorCount: number, roomsPerFloor: number): Record<string, string[]> => {
    const data: Record<string, string[]> = {};
    for (let i = 1; i <= floorCount; i++) {
        const floorKey = `Floor ${i}`;
        data[floorKey] = [];
        for (let j = 1; j <= roomsPerFloor; j++) {
            data[floorKey].push(`${i * 100 + j}`);
        }
    }
    return data;
};


// --- Component Data ---
const galleryItems: GalleryItem[] = [
    { 
        id: 1, 
        title: 'Main Campus Building', 
        subtitle: 'Administrative Block', 
        imageUrl: 'https://images.unsplash.com/photo-1562774053-61a2765c7ba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        buildingDetails: {
            floorCount: 8,
            floorData: {
                'Floor 1': ['Dr. Ananya Sharma (Dean)', 'Prof. Rajesh Kumar (Admissions)', 'Ms. Priya Singh (Accounts)'],
                'Floor 2': ['Dr. Vikram Patel (CSE HOD)', 'Asst. Prof. Sneha Reddy (IT)', 'Mr. Arjun Desai (Lab Admin)'],
                'Floor 3': ['Prof. Meera Iyer (ECE HOD)', 'Dr. Sanjay Gupta (Communications Lab)'],
                'Floor 4': ['Dr. Ritu Verma (EEE Dept)', 'Prof. Alok Nath (Power Systems)'],
                'Floor 5': ['Mechanical Engineering Dept.', 'Dr. Harish Chandra (HOD)'],
                'Floor 6': ['Civil Engineering Dept.', 'Student Project Rooms'],
                'Floor 7': ['Conference Halls', 'Meeting Rooms'],
                'Floor 8': ['Vice Chancellor\'s Office', 'Registrar\'s Office'],
            }
        }
    },
    { 
        id: 2, 
        title: 'Central Library', 
        subtitle: '24/7 Study Space', 
        imageUrl: 'https://plus.unsplash.com/premium_photo-1679829442036-13a8f47f26a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        buildingDetails: {
            floorCount: 14,
            floorData: {
                'Ground Floor': ['Mr. Suresh Gupta (Head Librarian)', 'Circulation Desk', 'IT Helpdesk'],
                'Floor 1': ['Reference Section', 'Periodicals', 'Ms. Kavita Rao (Librarian)'],
                'Floor 2': ['Computer Science Books', 'Study Area A'],
                'Floor 3': ['Electronics & Comm Books', 'Study Area B'],
                'Floor 4': ['Mechanical Engineering Books', 'Group Study Rooms'],
                'Floor 5': ['Civil & Biotech Books', 'Quiet Zone'],
                'Floor 6': ['Journals & Publications', 'Dr. Lakshmi Prasad (Archivist)'],
                'Floor 7': ['Digital Library Section', 'E-Resources'],
                'Floor 8': ['PhD Scholar Section', 'Research Wing'],
                'Floor 9': ['Language & Humanities', 'Reading Hall'],
                'Floor 10': ['Management Studies Section'],
                'Floor 11': ['Rare Books & Manuscripts'],
                'Floor 12': ['Audio-Visual Rooms'],
                'Floor 13': ['Administration & Staff Offices'],
                'Floor 14': ['Archives & Storage'],
            }
        }
    },
    { 
        id: 3, 
        title: 'SRM Tech Park', 
        subtitle: 'Innovation Hub', 
        imageUrl: 'https://images.unsplash.com/photo-1579548122213-721c5f6368e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        buildingDetails: {
            floorCount: 15,
            floorData: {
                'Ground Floor': ['Main Lobby & Security', 'Reception Desk', 'Atrium Cafe'],
                'Floor 1': ['SRM Innovation and Incubation Center (SIIC)', 'Startup Mentorship Office'],
                'Floor 2': ['Data Science & AI Research Lab', 'High-Performance Computing Center'],
                'Floor 3': ['Robotics & Automation Lab', 'IoT Lab'],
                'Floor 4': ['Amazon Web Services (AWS) Office', 'Cloud Computing Dept.'],
                'Floor 5': ['Microsoft Innovation Center', 'Student Project Hub'],
                'Floor 6': ['Tata Consultancy Services (TCS) Office', 'Corporate Relations'],
                'Floor 7': ['Cognizant Technology Solutions Office', 'Internship Coordination'],
                'Floor 8': ['Computer Science Dept. - Faculty Offices', 'Dr. C. Lakshmi (HOD)'],
                'Floor 9': ['Information Technology Dept. - Faculty Offices', 'Prof. S. Rajendran'],
                'Floor 10': ['Software Engineering Dept.', 'Seminar Hall A'],
                'Floor 11': ['Cybersecurity Wing', 'Digital Forensics Lab'],
                'Floor 12': ['Executive Meeting Rooms', 'Board Room'],
                'Floor 13': ['Open Collaboration Spaces', 'Think Tanks'],
                'Floor 14': ['R&D Department', 'Patent & IP Cell'],
                'Floor 15': ['Rooftop Conference Hall & Sky Garden', 'Event Management Office']
            }
        }
    },
    { 
        id: 4, 
        title: 'Sports Complex', 
        subtitle: 'Fitness & Recreation', 
        imageUrl: 'https://images.unsplash.com/photo-1549476464-3739221175a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        buildingDetails: {
            floorCount: 4,
            floorData: {
                'Ground Floor': ['Main Basketball Arena', 'Locker Rooms', 'Equipment Desk', 'Mr. Ravi Verma (Manager)'],
                'Floor 1': ['Multi-Gym & Weight Training Section', 'Physiotherapy Room', 'Coach Anjali Singh (Fitness)'],
                'Floor 2': ['Indoor Badminton Courts (4)', 'Squash Courts (2)', 'Table Tennis Zone'],
                'Floor 3': ['Yoga & Meditation Hall', 'Aerobics Studio', 'Ms. Deepika (Yoga Instructor)']
            }
        }
    },
    { 
        id: 5, 
        title: 'Student Hostels', 
        subtitle: 'Comfortable Living', 
        imageUrl: 'https://images.unsplash.com/photo-1615875618485-2d6a54728ed2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        buildingDetails: {
            floorCount: 1, // Represents the main office building for all hostels
            floorData: {
                'Ground Floor': ['Chief Warden\'s Office', 'Main Common Room & TV Lounge', 'Security Desk', 'Inter-Hostel Affairs Office'],
            },
            otherInfo: {
                title: 'Major Hostel Blocks',
                items: [
                    { name: 'Nelson Mandela Hostel (Boys)', floorData: generateHostelData(12, 20) },
                    { name: 'Jasmine Hostel (Girls)', floorData: generateHostelData(10, 24) },
                    { name: 'Orchid Hostel (Girls)', floorData: generateHostelData(10, 24) },
                    { name: 'Sandipani Hostel (Boys)', floorData: generateHostelData(8, 16) },
                    { name: 'Paari Hostel (Boys)', floorData: generateHostelData(8, 16) },
                    { name: 'Kaveri Hostel (Girls)', floorData: generateHostelData(10, 20) }
                ]
            }
        }
    },
    { 
        id: 6, 
        title: 'TP Ganesan Auditorium', 
        subtitle: 'Events & Conferences', 
        imageUrl: 'https://images.unsplash.com/photo-1540099834354-a3164937583a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isFeatured: true,
        featuredText: "Asia's Largest",
        buildingDetails: {
            floorCount: 3,
            floorData: {
                'Ground Level': ['Main Stage & Orchestra Pit', 'Lower Seating Area (A-Z)', 'Green Rooms', 'Mr. Prakash (Stage Manager)'],
                'Level 2': ['Balcony Seating (AA-JJ)', 'VIP Boxes', 'Lobby & Concessions'],
                'Level 3': ['Upper Balcony Seating (KK-SS)', 'Audio/Visual Control Room', 'Technical Staff Office', 'Mr. Anand (AV Head)']
            }
        }
    },
];

// --- Sub-Components ---
const GalleryCard: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => (
    <div 
        className={`relative rounded-xl overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300 h-80 ${item.buildingDetails ? 'cursor-pointer' : ''} ${item.isFeatured ? 'ring-4 ring-offset-2 ring-amber-400' : ''}`}
        onClick={onClick}
        role={item.buildingDetails ? 'button' : undefined}
        tabIndex={item.buildingDetails ? 0 : -1}
        onKeyDown={e => {
            if ((e.key === 'Enter' || e.key === ' ') && item.buildingDetails) {
                e.preventDefault();
                onClick();
            }
        }}
        aria-label={item.buildingDetails ? `Explore details for ${item.title}` : item.title}
    >
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-5 text-white">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm opacity-90">{item.subtitle}</p>
        </div>
        {item.isFeatured && (
            <div className="absolute top-3 left-3 bg-amber-400 text-amber-900 text-xs font-bold py-1 px-3 rounded-full flex items-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {item.featuredText}
            </div>
        )}
        {item.buildingDetails && (
             <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
                </svg>
                Explore
            </div>
        )}
    </div>
);


// --- Main Component ---
const CampusGallery: React.FC = () => {
    const [selectedBuilding, setSelectedBuilding] = useState<GalleryItem | null>(null);
    
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-rose-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Campus Gallery</h2>
                    </div>
                    <p className="text-lg text-rose-600 max-w-2xl mx-auto">Explore SRMIST Potheri through stunning visuals. Click on key buildings to see more.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map(item => (
                        <GalleryCard 
                            key={item.id} 
                            item={item} 
                            onClick={() => {
                                if (item.buildingDetails) {
                                    setSelectedBuilding(item);
                                }
                            }}
                        />
                    ))}
                </div>
            </div>

            {selectedBuilding && <BuildingDetailModal building={selectedBuilding} onClose={() => setSelectedBuilding(null)} />}
        </section>
    );
};

export default CampusGallery;
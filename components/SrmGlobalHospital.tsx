import React, { useState, useEffect } from 'react';

// --- MOCK DOCTOR DATA ---
interface Doctor {
    id: string;
    name: string;
    specialty: string;
    experience: number;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    schedule: {
        weekdays: string;
        saturday: string;
        sunday: string;
        status: 'Available Today' | 'On Leave' | 'Limited Slots';
        notes?: string;
    };
}

const mockDoctors: Doctor[] = [
    { id: 'doc1', name: 'Dr. Anjali Sharma', specialty: 'General Physician', experience: 12, rating: 4.8, reviewCount: 152, imageUrl: 'https://picsum.photos/seed/doc1/400/300', schedule: { weekdays: '9 AM - 5 PM', saturday: '9 AM - 1 PM', sunday: 'Closed', status: 'Available Today' } },
    { id: 'doc2', name: 'Dr. Vikram Singh', specialty: 'Orthopedics', experience: 15, rating: 4.9, reviewCount: 210, imageUrl: 'https://picsum.photos/seed/doc2/400/300', schedule: { weekdays: '10 AM - 6 PM', saturday: '10 AM - 2 PM', sunday: 'Closed', status: 'Available Today', notes: 'By appointment only.' } },
    { id: 'doc3', name: 'Dr. Priya Desai', specialty: 'Pediatrics', experience: 8, rating: 4.7, reviewCount: 98, imageUrl: 'https://picsum.photos/seed/doc3/400/300', schedule: { weekdays: '8 AM - 4 PM', saturday: 'Closed', sunday: 'Closed', status: 'On Leave' } },
    { id: 'doc4', name: 'Dr. Rohan Mehta', specialty: 'Cardiology', experience: 20, rating: 4.9, reviewCount: 305, imageUrl: 'https://picsum.photos/seed/doc4/400/300', schedule: { weekdays: '9 AM - 1 PM', saturday: '9 AM - 1 PM', sunday: '9 AM - 1 PM (Emergency Only)', status: 'Limited Slots' } },
    { id: 'doc5', name: 'Dr. Sneha Reddy', specialty: 'Dermatology', experience: 10, rating: 4.8, reviewCount: 188, imageUrl: 'https://picsum.photos/seed/doc5/400/300', schedule: { weekdays: '11 AM - 7 PM', saturday: '11 AM - 3 PM', sunday: 'Closed', status: 'Available Today' } },
    { id: 'doc6', name: 'Dr. Arjun Kumar', specialty: 'Dental Sciences', experience: 14, rating: 4.6, reviewCount: 130, imageUrl: 'https://picsum.photos/seed/doc6/400/300', schedule: { weekdays: '9 AM - 6 PM', saturday: 'Closed', sunday: 'Closed', status: 'Available Today' } },
];

// --- ICONS ---
const HospitalIcon = () => (
    <svg className="h-8 w-8 text-rose-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-6-6H6a6 6 0 00-6 6v2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10h.01M21 10h.01M15 10h.01" />
    </svg>
);
const StarIcon: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-orange-300' : 'text-orange-100'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const BookmarkIcon: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
    <svg className={`w-6 h-6 ${filled ? 'text-teal-400' : 'text-rose-300'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
    </svg>
);
const EmergencyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rose-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- DOCTOR DETAIL MODAL ---
const DoctorDetailModal: React.FC<{ doctor: Doctor, onClose: () => void }> = ({ doctor, onClose }) => {
    const statusColors = {
        'Available Today': 'bg-teal-100 text-teal-800',
        'On Leave': 'bg-red-100 text-red-800',
        'Limited Slots': 'bg-orange-100 text-orange-800',
    };
    
    return (
         <div 
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="doctor-detail-title"
        >
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 sm:p-8 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
                onClick={e => e.stopPropagation()}
                style={{ animationFillMode: 'forwards' }}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 transition-colors" aria-label="Close doctor details">
                    <CloseIcon />
                </button>

                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="sm:w-1/3 text-center">
                        <img src={doctor.imageUrl} alt={doctor.name} className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg border-4 border-lime-200" />
                        <h2 id="doctor-detail-title" className="text-2xl font-bold text-rose-900 mt-4">{doctor.name}</h2>
                        <p className="text-teal-600 font-semibold">{doctor.specialty}</p>
                        <p className="text-sm text-rose-600 mt-1">{doctor.experience} years of experience</p>
                    </div>
                    <div className="sm:w-2/3">
                        <div className="flex items-center mb-4">
                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusColors[doctor.schedule.status]}`}>{doctor.schedule.status}</span>
                        </div>
                        <h3 className="font-bold text-rose-800 text-lg mb-2">Schedule</h3>
                        <div className="bg-lime-50 rounded-lg p-4 space-y-2 text-rose-800 border border-lime-200">
                             <div className="flex justify-between"><span>Weekdays:</span> <span className="font-semibold">{doctor.schedule.weekdays}</span></div>
                             <div className="flex justify-between"><span>Saturday:</span> <span className="font-semibold">{doctor.schedule.saturday}</span></div>
                             <div className="flex justify-between"><span>Sunday:</span> <span className="font-semibold">{doctor.schedule.sunday}</span></div>
                        </div>
                         {doctor.schedule.notes && <p className="text-sm text-rose-600 italic mt-3">{doctor.schedule.notes}</p>}
                        
                        <div className="flex items-center mt-6">
                            <div className="flex" aria-label={`Rating: ${doctor.rating} out of 5 stars`}>
                                {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(doctor.rating)} />)}
                            </div>
                            <span className="text-rose-700 text-sm ml-2">{doctor.rating.toFixed(1)} ({doctor.reviewCount} reviews)</span>
                        </div>

                         <button className="mt-6 w-full py-3 bg-rose-400 text-white font-semibold rounded-lg shadow-md hover:bg-rose-500 transition-all duration-300 transform hover:scale-105">
                            Book Appointment
                        </button>
                    </div>
                </div>
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
};


// --- SUB-COMPONENTS ---
const DoctorCard: React.FC<{ doctor: Doctor; isSaved: boolean; onSaveToggle: (id: string) => void; onClick: () => void; }> = ({ doctor, isSaved, onSaveToggle, onClick }) => {
    const statusColors = {
        'Available Today': 'bg-teal-100 text-teal-800',
        'On Leave': 'bg-red-100 text-red-800',
        'Limited Slots': 'bg-orange-100 text-orange-800',
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <button onClick={onClick} className="block text-left flex-grow" aria-label={`View details for ${doctor.name}`}>
                <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <div>
                        <h3 className="text-xl font-bold text-rose-900">{doctor.name}</h3>
                        <p className="text-sm font-semibold text-teal-600">{doctor.specialty}</p>
                        <p className="text-sm text-rose-600">{doctor.experience} years experience</p>
                    </div>
                    <div className="mt-auto pt-3">
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${statusColors[doctor.schedule.status]}`}>
                            {doctor.schedule.status}
                        </span>
                    </div>
                </div>
            </button>
            <div className="p-4 border-t border-lime-100 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex" aria-label={`Rating: ${doctor.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(doctor.rating)} />)}
                    </div>
                    <span className="text-rose-700 text-sm ml-2">{doctor.rating.toFixed(1)}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); onSaveToggle(doctor.id); }} className="p-1" aria-label={`Save ${doctor.name}`}>
                    <BookmarkIcon filled={isSaved} />
                </button>
            </div>
        </div>
    );
};


const SrmGlobalHospital: React.FC = () => {
    type View = 'idle' | 'doctors' | 'emergency';
    const [view, setView] = useState<View>('idle');
    const [savedDoctorIds, setSavedDoctorIds] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem('savedDoctors');
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch (error) {
            return new Set();
        }
    });
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    useEffect(() => {
        try {
            localStorage.setItem('savedDoctors', JSON.stringify(Array.from(savedDoctorIds)));
        } catch (error) {
            console.error("Failed to save doctors to localStorage", error);
        }
    }, [savedDoctorIds]);

    const handleSaveToggle = (id: string) => {
        setSavedDoctorIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const renderContent = () => {
        switch (view) {
            case 'doctors':
                return (
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-6 px-2">
                            <h2 className="text-3xl font-bold text-rose-900">Available Doctors</h2>
                            <button onClick={() => setView('idle')} className="text-rose-500 font-semibold hover:underline">
                                &larr; Back
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mockDoctors.map(doc => (
                                <DoctorCard 
                                    key={doc.id} 
                                    doctor={doc} 
                                    isSaved={savedDoctorIds.has(doc.id)} 
                                    onSaveToggle={handleSaveToggle}
                                    onClick={() => setSelectedDoctor(doc)}
                                />
                            ))}
                        </div>
                    </div>
                );

            case 'emergency':
                return (
                     <div className="w-full">
                         <div className="flex justify-between items-center mb-6 px-2">
                            <h2 className="text-3xl font-bold text-rose-900">Emergency Services</h2>
                            <button onClick={() => setView('idle')} className="text-rose-500 font-semibold hover:underline">
                                &larr; Back
                            </button>
                        </div>
                        <div className="bg-rose-50 rounded-2xl shadow-lg p-8 text-center border-2 border-rose-300">
                            <EmergencyIcon />
                            <h3 className="text-2xl font-bold text-rose-900">24/7 Emergency Care</h3>
                            <p className="text-rose-600 mt-2 max-w-md mx-auto">
                               For any medical emergency, our dedicated team is always ready to assist you. Proceed directly to the hospital entrance for immediate attention.
                            </p>
                            <div className="mt-6">
                                <p className="text-sm text-rose-800 font-semibold">Emergency Helpline:</p>
                                <p className="text-4xl font-bold text-rose-900 tracking-wider mt-1">100 / 112</p>
                            </div>
                            <a href="tel:100" className="mt-8 inline-flex items-center justify-center py-4 px-8 bg-rose-500 text-white font-bold rounded-lg shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105">
                                <PhoneIcon />
                                Call Emergency Now
                            </a>
                        </div>
                    </div>
                );

            case 'idle':
            default:
                return (
                    <div className="text-center">
                         <div className="flex justify-center items-center mb-4">
                            <HospitalIcon />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">SRM Global Hospital</h2>
                        </div>
                        <p className="text-lg text-rose-600 max-w-2xl mx-auto">Your health partner on campus. Find specialists or get immediate help.</p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => setView('doctors')}
                                className="px-8 py-4 bg-rose-400 text-white font-semibold rounded-full shadow-lg hover:bg-rose-500 transition-colors transform hover:scale-105 duration-300">
                                Find a Doctor
                            </button>
                            <button 
                                onClick={() => setView('emergency')}
                                className="px-8 py-4 bg-red-300 text-white font-semibold rounded-full shadow-lg hover:bg-red-400 transition-colors transform hover:scale-105 duration-300">
                                Emergency Services
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <section className="py-20 bg-lime-100">
            <div className="container mx-auto px-4">
                {renderContent()}
            </div>
            {selectedDoctor && (
                <DoctorDetailModal 
                    doctor={selectedDoctor} 
                    onClose={() => setSelectedDoctor(null)} 
                />
            )}
        </section>
    );
};

export default SrmGlobalHospital;
import React, { useState } from 'react';

// Icons
const ARIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const LocateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const NavArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-cyan-400 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>;
const CameraOffIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>;

// Local types and data
interface MapLocation {
  id: string;
  name: string;
  category: string;
  description: string;
  coords: { lat: number; lon: number };
}

const locations: MapLocation[] = [
    { id: 'loc1', name: 'Main Mess Hall', category: 'food', description: 'Central dining facility', coords: { lat: 12.8235, lon: 80.0462 } },
    { id: 'loc2', name: 'Foodys', category: 'food', description: 'Fast food and snacks', coords: { lat: 12.8228, lon: 80.0449 } },
    { id: 'loc3', name: 'University Canteen', category: 'food', description: 'Near Tech Park', coords: { lat: 12.8241, lon: 80.0470 } },
    { id: 'loc4', name: 'Campus Bus Stop', category: 'transport', description: 'Main bus terminal', coords: { lat: 12.8245, lon: 80.0450 } },
    { id: 'loc5', name: 'Potheri Station Gate', category: 'transport', description: 'Entry to railway station', coords: { lat: 12.8210, lon: 80.0410 } },
    { id: 'loc6', name: 'University Bookstore', category: 'shops', description: 'Textbooks and stationery', coords: { lat: 12.8240, lon: 80.0435 } },
    { id: 'loc7', name: 'General Store', category: 'shops', description: 'Daily necessities', coords: { lat: 12.8225, lon: 80.0428 } },
    { id: 'loc8', name: 'SRM Fitness Center', category: 'gym', description: 'State-of-the-art equipment', coords: { lat: 12.8255, lon: 80.0458 } },
    { id: 'loc9', name: 'Outdoor Sports Ground', category: 'gym', description: 'For various sports', coords: { lat: 12.8260, lon: 80.0475 } },
    { id: 'loc10', name: 'SRM General Hospital', category: 'health', description: '24/7 emergency services', coords: { lat: 12.8205, lon: 80.0455 } },
    { id: 'loc11', name: 'Campus Pharmacy', category: 'health', description: 'Inside hospital premises', coords: { lat: 12.8208, lon: 80.0457 } },
    { id: 'loc12', name: "Men's Hostel Block A", category: 'housing', description: 'Senior student housing', coords: { lat: 12.8265, lon: 80.0440 } },
    { id: 'loc13', name: "Women's Hostel Block C", category: 'housing', description: 'Secure residential area', coords: { lat: 12.8215, lon: 80.0480 } },
];

// AR View Component
const ARNavigationView: React.FC<{ destination: string; onExit: () => void }> = ({ destination, onExit }) => {
    return (
        <div className="fixed inset-0 bg-black z-50 text-white flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center">
                <CameraOffIcon />
                <p className="text-gray-500 text-lg mt-4">Camera feed placeholder</p>
                <p className="text-gray-600 text-sm">AR navigation requires camera access</p>
            </div>
            <div className="relative z-10 w-full h-full flex flex-col p-4">
                <header className="flex justify-between items-center bg-black/50 p-3 rounded-lg">
                    <div>
                        <p className="text-sm text-gray-300">Navigating to</p>
                        <h2 className="text-xl font-bold">{destination}</h2>
                    </div>
                    <button onClick={onExit} className="bg-red-500/80 hover:bg-red-600 rounded-full p-2 transition-colors" aria-label="Exit AR Navigation">
                        <CloseIcon />
                    </button>
                </header>
                <main className="flex-grow flex flex-col items-center justify-center">
                    <NavArrowIcon />
                    <p className="text-5xl font-bold mt-4 drop-shadow-md">250m</p>
                    <p className="text-xl text-gray-200 drop-shadow-md">Straight Ahead</p>
                </main>
                <footer className="text-center bg-black/50 p-3 rounded-lg">
                    <p>Follow the path to reach your destination</p>
                </footer>
            </div>
        </div>
    );
};


const mapFilters = [
    { id: 'transport', label: 'Transportation', sublabel: 'Buses & Autos' },
    { id: 'food', label: 'Food & Dining', sublabel: 'Mess & Cafes' },
    { id: 'shops', label: 'Shops & Services', sublabel: 'Xerox & Stationery' },
    { id: 'gym', label: 'Gyms & Fitness', sublabel: 'On & Off Campus' },
    { id: 'health', label: 'Health & Safety', sublabel: 'Hospital & Emergency' },
    { id: 'housing', label: 'Housing', sublabel: 'Hostels & PGs' },
];

const InteractiveMap: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('food');
    const [arModeActive, setArModeActive] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
    const [mapUrl, setMapUrl] = useState(`https://demo.f4map.com/#lat=12.8232&lon=80.0444&zoom=17&pitch=50`);
    
    const handleLocate = (coords: { lat: number; lon: number }) => {
        setMapUrl(`https://demo.f4map.com/#lat=${coords.lat}&lon=${coords.lon}&zoom=18.5&pitch=60&bearing=140`);
    };

    const handleArNavigate = (destinationName: string) => {
        setSelectedDestination(destinationName);
        setArModeActive(true);
    };

    const visibleLocations = locations.filter(loc => loc.category === activeFilter);
    const activeFilterLabel = mapFilters.find(f => f.id === activeFilter)?.label || 'Places';

    return (
        <section className="py-20 bg-white">
            {arModeActive && selectedDestination && (
                <ARNavigationView
                    destination={selectedDestination}
                    onExit={() => setArModeActive(false)}
                />
            )}

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-amber-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 10L9 7" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800">Interactive 3D Campus Map</h2>
                    </div>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">Select a category to view points of interest. Click 'Locate' to find them on the 3D map or use AR to navigate.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/3 flex flex-col">
                        <div>
                            {mapFilters.map(filter => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center mb-2 ${activeFilter === filter.id ? 'bg-amber-50 border-amber-600 shadow-md' : 'bg-white border-stone-200 hover:border-amber-400 hover:bg-amber-50'}`}
                                >
                                    <div>
                                        <h4 className={`font-bold text-lg ${activeFilter === filter.id ? 'text-amber-900' : 'text-stone-700'}`}>{filter.label}</h4>
                                        <p className="text-sm text-stone-500">{filter.sublabel}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 bg-white p-4 rounded-lg border border-stone-200 flex-grow">
                            <h3 className="text-xl font-bold text-stone-800 mb-3 border-b pb-2">Places in {activeFilterLabel}</h3>
                            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2">
                                {visibleLocations.length > 0 ? visibleLocations.map(location => (
                                    <div key={location.id} className="bg-stone-50 p-3 rounded-lg hover:bg-stone-100 transition-colors">
                                        <h4 className="font-semibold text-stone-800">{location.name}</h4>
                                        <p className="text-sm text-stone-600 mb-3">{location.description}</p>
                                        <div className="flex items-center space-x-2">
                                            <button onClick={() => handleLocate(location.coords)} className="flex-1 text-sm bg-amber-800 text-white font-semibold py-2 px-3 rounded-md flex items-center justify-center hover:bg-amber-900 transition-colors">
                                                <LocateIcon /> Locate
                                            </button>
                                            <button onClick={() => handleArNavigate(location.name)} className="flex-1 text-sm bg-stone-700 text-white font-semibold py-2 px-3 rounded-md flex items-center justify-center hover:bg-stone-800 transition-colors">
                                                <ARIcon /> Navigate
                                            </button>
                                        </div>
                                    </div>
                                )) : <p className="text-stone-500">No locations found for this category.</p>}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-[550px] rounded-2xl overflow-hidden shadow-lg border">
                        <iframe
                            key={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={mapUrl}
                            title="Interactive 3D Campus Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveMap;
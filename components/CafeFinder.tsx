import React, { useState, useEffect } from 'react';
import type { Place } from '../types';

// --- MOCK DATA ---
const mockCafes: Place[] = [
  { id: '1', name: 'The Cozy Bean', address: '123 Oak St, Meadowville', rating: 4.5, imageUrl: 'https://picsum.photos/seed/cafe1/400/300', reviewCount: 124 },
  { id: '2', name: 'Morning Brew', address: '456 Pine Ave, Rivertown', rating: 4.8, imageUrl: 'https://picsum.photos/seed/cafe2/400/300', reviewCount: 258 },
  { id: '3', name: 'Steamy Mugs', address: '789 Maple Dr, Hillside', rating: 4.2, imageUrl: 'https://picsum.photos/seed/cafe3/400/300', reviewCount: 98 },
  { id: '4', name: 'The Daily Grind', address: '101 Birch Ln, Lakeside', rating: 4.6, imageUrl: 'https://picsum.photos/seed/cafe4/400/300', reviewCount: 189 },
  { id: '5', name: 'Espresso Yourself', address: '212 Cedar Ct, Sunnyside', rating: 4.9, imageUrl: 'https://picsum.photos/seed/cafe5/400/300', reviewCount: 312 },
  { id: '6', name: 'Perk Up', address: '333 Willow Way, Greenfield', rating: 4.3, imageUrl: 'https://picsum.photos/seed/cafe6/400/300', reviewCount: 76 },
];

// --- ICONS ---
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


// --- COMPONENTS ---
const CafeCard: React.FC<{ cafe: Place; isSaved: boolean; onSaveToggle: (id: string) => void; }> = ({ cafe, isSaved, onSaveToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img src={cafe.imageUrl} alt={cafe.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-rose-900">{cafe.name}</h3>
                <p className="text-sm text-rose-600">{cafe.address}</p>
            </div>
            <button onClick={() => onSaveToggle(cafe.id)} className="p-1 -mt-1 -mr-1" aria-label={`Save ${cafe.name}`}>
                <BookmarkIcon filled={isSaved} />
            </button>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex" aria-label={`Rating: ${cafe.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(cafe.rating)} />)}
          </div>
          <span className="text-rose-700 text-sm ml-2">{cafe.rating.toFixed(1)} ({cafe.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};


const CafeFinder: React.FC = () => {
  type View = 'idle' | 'loading' | 'results' | 'saved';
  const [view, setView] = useState<View>('idle');
  const [savedCafeIds, setSavedCafeIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('savedCafes');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (error) {
      console.error("Failed to parse saved cafes from localStorage", error);
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('savedCafes', JSON.stringify(Array.from(savedCafeIds)));
    } catch (error) {
      console.error("Failed to save cafes to localStorage", error);
    }
  }, [savedCafeIds]);

  const handleFindCafes = () => {
    setView('loading');
    setTimeout(() => {
      setView('results');
    }, 1500);
  };

  const handleSaveToggle = (id: string) => {
    setSavedCafeIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  const savedCafes = mockCafes.filter(cafe => savedCafeIds.has(cafe.id));

  const renderContent = () => {
    switch (view) {
      case 'loading':
        return (
          <div className="text-center py-12" role="status">
            <svg className="animate-spin h-10 w-10 text-rose-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-4 text-rose-600 text-lg">Finding the best cafes near you...</p>
          </div>
        );
      case 'results':
      case 'saved':
        const cafesToShow = view === 'results' ? mockCafes : savedCafes;
        const title = view === 'results' ? 'Cafes Near You' : 'Your Saved Cafes';
        return (
          <div className="w-full">
            <div className="flex justify-between items-center mb-6 px-2">
                 <h2 className="text-3xl font-bold text-rose-900">{title}</h2>
                 <button onClick={() => setView('idle')} className="text-rose-500 font-semibold hover:underline">
                    &larr; Back
                 </button>
            </div>
            {cafesToShow.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cafesToShow.map(cafe => (
                        <CafeCard key={cafe.id} cafe={cafe} isSaved={savedCafeIds.has(cafe.id)} onSaveToggle={handleSaveToggle} />
                    ))}
                 </div>
            ) : (
                <div className="text-center bg-lime-50 p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-rose-900">No Saved Cafes Yet</h3>
                    <p className="text-rose-600 mt-2">Click the bookmark icon on a cafe to save it here.</p>
                     <button onClick={() => setView('results')} className="mt-4 px-6 py-2 bg-rose-400 text-white font-semibold rounded-full hover:bg-rose-500 transition-colors">
                        Find Cafes
                    </button>
                </div>
            )}
          </div>
        );
      case 'idle':
      default:
        return (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={handleFindCafes}
                    className="px-8 py-4 bg-rose-400 text-white font-semibold rounded-full shadow-lg hover:bg-rose-500 transition-colors transform hover:scale-105 duration-300">
                    Find Cafes Near Me
                </button>
                <button 
                    onClick={() => setView('saved')}
                    className="px-8 py-4 bg-red-300 text-white font-semibold rounded-full shadow-lg hover:bg-red-400 transition-colors transform hover:scale-105 duration-300">
                    Show Saved Cafes ({savedCafeIds.size})
                </button>
            </div>
        );
    }
  };

  return (
    <section className="py-20 bg-lime-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <div className="flex justify-center items-center mb-4">
               <svg className="h-8 w-8 text-rose-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1z" />
               </svg>
               <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Cafe Curator</h2>
           </div>
           <p className="text-lg text-rose-600 max-w-2xl mx-auto">Discover and keep track of the best coffee spots around campus.</p>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default CafeFinder;
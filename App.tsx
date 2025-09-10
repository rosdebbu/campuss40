import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import QuickNav from './components/QuickNav';
import CampusGallery from './components/CampusGallery';
import CampusFacilities from './components/CampusFacilities';
import InteractiveMap from './components/InteractiveMap';
import CampusLifeEvents from './components/CampusLifeEvents';
import UpcomingEvents from './components/UpcomingEvents';
import CampusNews from './components/CampusNews';
import CommunityForum from './components/CommunityForum';
import Footer from './components/Footer';
import CafeFinder from './components/CafeFinder';

const App: React.FC = () => {
  return (
    <div className="bg-stone-50">
      <Header />
      <main>
        <Hero />
        <QuickNav />
        <CampusGallery />
        <CampusFacilities />
        <InteractiveMap />
        <CafeFinder />
        <CampusLifeEvents />
        <UpcomingEvents />
        <CampusNews />
        <CommunityForum />
      </main>
      <Footer />
    </div>
  );
};

export default App;
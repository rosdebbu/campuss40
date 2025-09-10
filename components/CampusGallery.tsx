
import React from 'react';
import type { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Main Campus Building', subtitle: 'Administrative Block', imageUrl: 'https://picsum.photos/400/600?random=1' },
    { id: 2, title: 'Central Library', subtitle: '24/7 Study Space', imageUrl: 'https://picsum.photos/400/600?random=2' },
    { id: 3, title: 'SRM Tech Park', subtitle: 'Innovation Hub', imageUrl: 'https://picsum.photos/400/600?random=3' },
    { id: 4, title: 'Sports Complex', subtitle: 'Fitness & Recreation', imageUrl: 'https://picsum.photos/400/600?random=4' },
    { id: 5, title: 'Student Hostels', subtitle: 'Comfortable Living', imageUrl: 'https://picsum.photos/400/600?random=5' },
    { id: 6, title: 'TP Ganesan Auditorium', subtitle: 'Events & Conferences', imageUrl: 'https://picsum.photos/400/600?random=6' },
];

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
    <div className="relative rounded-xl overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300 h-80">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-5 text-white">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm opacity-90">{item.subtitle}</p>
        </div>
    </div>
);

const CampusGallery: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-amber-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800">Campus Gallery</h2>
                    </div>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">Explore SRMIST Potheri through stunning visuals</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map(item => (
                        <GalleryCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusGallery;
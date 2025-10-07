import React, { useState } from 'react';
import type { NewsArticle } from '../types';

const mainArticle: NewsArticle = {
    id: 1,
    category: 'ACADEMICS',
    categoryColor: 'bg-rose-400',
    title: 'SRMIST Unveils New AI & Data Science Research Center',
    author: 'By SRM Communications',
    date: 'October 26, 2024',
    imageUrl: 'https://picsum.photos/seed/newsmain/800/500',
    excerpt: 'The new state-of-the-art facility aims to foster innovation and collaboration among students and faculty, positioning SRMIST at the forefront of technological research.'
};

const recentStories: NewsArticle[] = [
    { id: 2, category: 'CAMPUS LIFE', categoryColor: 'bg-red-300', title: 'Annual Cultural Fest "Milan" Dates Announced for October', date: 'October 24, 2024', imageUrl: 'https://picsum.photos/seed/news2/200/200', excerpt: 'Get ready for a week of music, dance, and art as the much-awaited fest returns.' },
    { id: 3, category: 'SPORTS', categoryColor: 'bg-teal-300', title: 'Inter-University Cricket Tournament Heats Up', date: 'October 22, 2024', imageUrl: 'https://picsum.photos/seed/news3/200/200', excerpt: 'Our university team advances to the semi-finals after a thrilling victory.' },
    { id: 4, category: 'ACHIEVEMENTS', categoryColor: 'bg-orange-300', title: 'SRM Rover Team Wins International Competition', date: 'October 20, 2024', imageUrl: 'https://picsum.photos/seed/news4/200/200', excerpt: 'The student-led team bags the top prize for their innovative rover design.' },
    { id: 5, category: 'EVENTS', categoryColor: 'bg-red-300', title: 'Hackathon SRM 6.0 Registration Now Open', date: 'October 19, 2024', imageUrl: 'https://picsum.photos/seed/news5/200/200', excerpt: 'The biggest coding challenge on campus is back with exciting new tracks.' },
    { id: 6, category: 'ALUMNI', categoryColor: 'bg-teal-300', title: 'Alumni Meetup in Bangalore a Grand Success', date: 'October 18, 2024', imageUrl: 'https://picsum.photos/seed/news6/200/200', excerpt: 'Over 200 alumni gathered to network and reminisce about their time at SRMIST.' },
    { id: 7, category: 'RESEARCH', categoryColor: 'bg-orange-300', title: 'New Paper on Sustainable Energy Published by EEE Dept.', date: 'October 17, 2024', imageUrl: 'https://picsum.photos/seed/news7/200/200', excerpt: 'The research focuses on next-generation solar panel efficiency.' },
];

const CampusNews: React.FC = () => {
    const [showAllNews, setShowAllNews] = useState(false);
    const storiesToShow = showAllNews ? recentStories : recentStories.slice(0, 3);

    return (
        <section className="py-20 bg-lime-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-rose-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h2m-4 3H5" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Campus News & Updates</h2>
                    </div>
                    <p className="text-lg text-rose-600 max-w-2xl mx-auto">Stay informed about the latest happenings and announcements.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Article */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden group">
                        <div className="relative">
                            <img src={mainArticle.imageUrl} alt={mainArticle.title} className="w-full h-80 object-cover" />
                            <div className="absolute top-4 left-4">
                                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${mainArticle.categoryColor}`}>{mainArticle.category}</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-rose-900 mb-3 group-hover:text-rose-700 transition-colors duration-300">{mainArticle.title}</h3>
                            <p className="text-sm text-rose-500 mb-4">{mainArticle.author} • {mainArticle.date}</p>
                            <p className="text-rose-700 mb-6">{mainArticle.excerpt}</p>
                            <a href="#" className="font-semibold text-rose-400 hover:text-rose-500 transition-colors duration-300 group">
                                Read More <span className="group-hover:ml-1 transition-all duration-300">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Recent Stories */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
                        <h3 className="text-2xl font-bold text-rose-900 mb-6">Recent Stories</h3>
                        <div className="space-y-6 flex-grow">
                            {storiesToShow.map(story => (
                                <a href="#" key={story.id} className="group block hover:bg-lime-50 p-2 rounded-lg transition-colors duration-200 -m-2">
                                    <div className="flex items-start space-x-4">
                                        <img src={story.imageUrl} alt={story.title} className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
                                        <div>
                                            <span className={`text-xs font-bold ${story.categoryColor.replace('bg-', 'text-')}`}>{story.category}</span>
                                            <h4 className="font-semibold text-rose-900 leading-tight group-hover:text-rose-700 transition-colors duration-300 mt-1">{story.title}</h4>
                                            <p className="text-xs text-rose-500 mt-2 line-clamp-2">{story.excerpt}</p>
                                            <p className="text-xs text-rose-300 mt-2">{story.date}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                         <div className="mt-6 text-center">
                            <button
                                onClick={() => setShowAllNews(!showAllNews)}
                                className="w-full py-3 bg-lime-200 text-rose-600 font-semibold rounded-lg hover:bg-lime-300 transition-colors duration-300"
                            >
                                {showAllNews ? 'Show Less' : 'View All News'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusNews;
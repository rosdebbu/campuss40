import React from 'react';

// Thumbs up icon for upvoting/liking comments
const ThumbsUpIcon: React.FC<{ active?: boolean }> = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${active ? 'text-amber-500 fill-current' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333V17a1 1 0 001 1h6.758a1 1 0 00.97-1.22l-1.396-4.887A1 1 0 0012.382 11H9V6.5a1.5 1.5 0 00-3 0v3.833z" />
    </svg>
);


const CommunityForum: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-amber-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800">Community Hub</h2>
                    </div>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">Share your ideas, post feedback, and discuss how to make our campus even better.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-stone-50 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 h-[600px]">
                    {/* Sidebar with channels */}
                    <div className="w-full md:w-1/3 bg-white rounded-xl p-4 flex flex-col">
                        <h3 className="font-bold text-lg mb-4 text-stone-800">Discussion Channels</h3>
                        <div className="space-y-2 overflow-y-auto">
                            <div className="p-3 bg-amber-100 text-amber-900 rounded-lg font-semibold cursor-pointer"># campus-feedback</div>
                            <div className="p-3 hover:bg-stone-100 rounded-lg cursor-pointer"># event-ideas</div>
                            <div className="p-3 hover:bg-stone-100 rounded-lg cursor-pointer"># study-groups</div>
                            <div className="p-3 hover:bg-stone-100 rounded-lg cursor-pointer"># lost-and-found</div>
                            <div className="p-3 hover:bg-stone-100 rounded-lg cursor-pointer"># general-discussion</div>
                        </div>
                    </div>

                    {/* Main chat window */}
                    <div className="w-full md:w-2/3 flex flex-col bg-white rounded-xl">
                        <div className="p-4 border-b">
                            <h3 className="font-bold text-xl text-stone-800"># campus-feedback</h3>
                            <p className="text-sm text-stone-500">Post suggestions and upvote ideas you like!</p>
                        </div>
                        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                            {/* Sample messages */}
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-pink-500 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-stone-800">Sarah J.</p>
                                    <div className="bg-stone-100 p-3 rounded-lg mt-1 group">
                                        <p>Could we get more water coolers in the Tech Park building? It gets really busy during the day.</p>
                                        <div className="flex items-center gap-2 mt-2 text-stone-500">
                                            <button className="flex items-center gap-1 hover:text-amber-700 transition-colors"><ThumbsUpIcon /> 12</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-stone-800">Mike R.</p>
                                    <div className="bg-stone-100 p-3 rounded-lg mt-1 group">
                                       <p>I'd love to see a 24/7 cafe open during exam season. Would be a lifesaver for late-night study sessions.</p>
                                       <div className="flex items-center gap-2 mt-2 text-stone-500">
                                            <button className="flex items-center gap-1 hover:text-amber-700 transition-colors"><ThumbsUpIcon /> 28</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 flex-row-reverse">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0"></div>
                                <div className="flex flex-col items-end">
                                    <p className="font-semibold text-stone-800">You</p>
                                    <div className="bg-amber-700 text-white p-3 rounded-lg mt-1 group">
                                        <p>Great idea about the cafe, Mike! I completely agree.</p>
                                         <div className="flex items-center gap-2 mt-2 text-amber-200">
                                            <button className="flex items-center gap-1 text-white transition-colors"><ThumbsUpIcon active={true} /> 1</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t">
                            <div className="relative">
                                <input type="text" placeholder="Share your thoughts or comment..." className="w-full bg-stone-100 rounded-full py-3 px-5 pr-14 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-700 hover:bg-amber-800 text-white w-10 h-10 rounded-full flex items-center justify-center" aria-label="Send Message">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityForum;
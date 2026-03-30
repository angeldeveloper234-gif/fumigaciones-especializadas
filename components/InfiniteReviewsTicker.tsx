import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_MOCK } from '../src/data/googleReviewsMock';

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const InfiniteReviewsTicker: React.FC = () => {
    // Filter only 4+ stars just in case, though mock is mostly 5.
    const filteredReviews = GOOGLE_REVIEWS_MOCK.filter(r => r.rating >= 4);

    return (
        <div id="testimonios" className="w-full overflow-hidden bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-2 justify-center md:justify-start">
                    <GoogleIcon className="w-10 h-10" />
                    <span className="text-gray-900 font-bold text-2xl tracking-tight">Reseñas en Google Maps</span>
                </div>
                <p className="text-gray-500 font-medium">Calificación promedio: <span className="text-brand-yellow font-bold text-lg">4.9/5</span> basada en más de 300 opiniones.</p>
            </div>

            <div className="flex w-full overflow-hidden relative py-4">
                <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-6 px-3">
                    {/* Double the list to create seamless loop */}
                    {[...filteredReviews, ...filteredReviews, ...filteredReviews].map((review, idx) => (
                        <div
                            key={`${review.id}-${idx}`}
                            className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-white border border-gray-100 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 select-none group border-b-4 border-b-transparent hover:border-b-brand-red"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <img
                                            src={review.profile_photo_url}
                                            alt={review.author_name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-50 group-hover:border-brand-red/20 transition-all"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.author_name}&background=random`
                                            }}
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-100">
                                            <GoogleIcon className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm tracking-tight">{review.author_name}</h4>
                                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{review.time}</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={`${i < review.rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                {review.text ? `"${review.text}"` : <span className="italic text-gray-400">Calificación sin comentario</span>}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Gradient overlays to smooth edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            </div>
        </div>
    );
};

export default InfiniteReviewsTicker;

'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';

export default function page() {
    const { slug } = useParams();
    const [movie, setmovie] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movie/view`)
            .then(res => {
                const allMovies = res.data.data
                const singleMovie = allMovies.find(m => m._id === slug)
                setmovie(singleMovie)
            })
            .catch((error) => console.error('Error fetching user:', error));
    }, [slug]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="px-4 py-6">

            <div className="bg-gray-800 rounded-lg px-4 sm:px-6 py-6 max-w-2xl mx-auto">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="aspect-[2/3] w-full max-w-xs sm:max-w-sm mx-auto object-cover rounded-md"
                />

                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mt-4">
                    {movie.title}
                    <span className="text-gray-400">({movie.year})</span>
                </h2>

                <h3 className="text-gray-300 mt-2">
                    Category: <span className="text-white">{movie.category?.name || 'N/A'}</span>
                </h3>
            </div>

        </div>
    )
}

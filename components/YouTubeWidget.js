'use client';

import { useEffect, useState } from 'react';

export default function YouTubeWidget() {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    console.log(videos);

    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=5&key=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setVideos(data.items.slice(0, 5));
            });
    }, [searchQuery]);
    return (
        <div className="p-4 bg-black rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Youtube Search</h2>
            <div className="mb-4 flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setSearchQuery(inputValue);
                        }
                    }}
                    placeholder="Search YouTube..."
                    className="flex-1 px-3 py-2 border rounded"
                />
                <button
                    onClick={() => setSearchQuery(inputValue)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>

            <div className="space-y-2">
                {videos.map((video) => (
                    <a
                        key={video.id.videoId}
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 hover:bg-gray-500 p-2 rounded"
                    >
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                            className="w-24 h-18 object-cover rounded"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-semibold line-clamp-2">
                                {video.snippet.title}
                            </p>
                            <p className="text-xs text-white">
                                {video.snippet.channelTitle}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

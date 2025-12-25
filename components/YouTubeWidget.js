'use client';

import { useEffect, useState } from 'react';

export default function YouTubeWidget() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=5&key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // check what you're getting back
        setVideos(data.items);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-4 bg-black rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">Trending Videos</h2>
      {videos.length > 0 ? (
        <div className="space-y-2">
          {videos.map((video) => (
            <a 
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
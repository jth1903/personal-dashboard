'use client';

import { useEffect, useState } from 'react';

export default function NewsWidget() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSource, setSelectedSource] = useState('general');

    const sources = {
        general: { label: 'Top Headlines', url: 'country=us' },
        bbc: { label: 'BBC News', url: 'sources=bbc-news' },
        cnn: { label: 'CNN', url: 'sources=cnn' },
        reuters: { label: 'Reuters', url: 'sources=reuters' },
        wsj: {
            label: 'Wall Street Journal',
            url: 'sources=the-wall-street-journal',
        },
        ap: { label: 'Associated Press', url: 'sources=associated-press' },
        tech: { label: 'Technology', url: 'country=us&category=technology' },
        business: { label: 'Business', url: 'country=us&category=business' },
    };

    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

        const sourceUrl = sources[selectedSource].url;
        const url = `https://newsapi.org/v2/top-headlines?${sourceUrl}&pageSize=5&apiKey=${API_KEY}`;

        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.articles) {
                    setArticles(data.articles);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
                setLoading(false);
            });
    }, [selectedSource]);

    return (
        <div className="p-4 bg-black rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Latest News</h2>
                <select
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                >
                    {Object.entries(sources).map(([key, { label }]) => (
                        <option key={key} value={key}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            {loading ? (
                <p>Loading news...</p>
            ) : (
                <div className="space-y-3">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:bg-gray-800 p-2 rounded transition-colors"
                        >
                            <div className="flex gap-3">
                                {article.urlToImage && (
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-20 h-20 object-cover rounded"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold line-clamp-2 mb-1">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        {article.source.name}
                                    </p>
                                    {article.publishedAt && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            {new Date(
                                                article.publishedAt,
                                            ).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

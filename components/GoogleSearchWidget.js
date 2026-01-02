'use client'
import { useState } from 'react';

export default function GoogleSearchWidget() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      setQuery(''); // clear the input after searching
    }
  };

  return (
    <div className="p-4 bg-black rounded-lg shadow">
        <div className="flex gap-2"></div>
      <h2 className="text-lg font-bold mb-2">Google Search</h2>
      <div className="flex gap-2">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          placeholder="Search Google..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button 
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}
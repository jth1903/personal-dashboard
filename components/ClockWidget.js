'use client'

import { useEffect, useState} from 'react';

export default function ClockWidget() {
    const [time, setTime] = useState(new Date());
    const [quote, setQuote] = useState(null);

    useEffect(() => {

        const API_KEY = process.env.NEXT_PUBLIC_API_NINJAS_KEY;

        fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
            headers: {
                'X-Api-Key': API_KEY
            }
        })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            setQuote(data[0])
        })
        .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        setTime(new Date());
        // Update time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function -this runs when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 bg-black rounder-lg shadow">
            <h2 className='text-lg font-bold md-2'>Current Time</h2>
            <div className='text-4xl fon-bold'>
                {time.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}
            </div>
            {quote && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p className="italic">"{quote.quote}"</p>
                </div>
            )}
        </div>
    );
}
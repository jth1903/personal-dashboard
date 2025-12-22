'use client';

import { useEffect, useState} from 'react';

export default function WeatherWidget() {
    const [weather, setWeather] = useState();

    useEffect (() => {
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_key;
        console.log('API Key:', API_KEY);
        const city = "Onalaska";
        const url = process.env.NEXT_PUBLIC_API_URL;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeather(data);
        })
        .catch(error => console.error('Error', error));
    }, []);

    return (
        <div className="p-4 bg-black rounded-lg shadow">
            <h2>Weather</h2>
            {weather && weather.main ? (
                <p>Temperature: {weather.main.temp}°F</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
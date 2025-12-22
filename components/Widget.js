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
                <div>
                    <p>Temperature: {weather.main.temp}°F</p>
                    <p>High: {weather.main.temp_max}°F</p>
                    <p>Low: {weather.main.temp_min}°F</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Conditions: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
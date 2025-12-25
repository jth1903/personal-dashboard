'use client';

import { useEffect, useState} from 'react';

export default function WeatherWidget() {
    const [weather, setWeather] = useState();

    useEffect(() => {
  // Get user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
        })
        .catch(error => console.error('Error:', error));
    });
  }
}, []);
    return (
        <div className="p-4 bg-black rounded-lg shadow">
            <h2>Weather</h2>
            {weather && weather.main ? (
                <div>
                    <p>Location: {weather.name}</p>
                    <p>Temperature: {weather.main.temp}°F</p>
                    <p>High: {weather.main.temp_max}°F</p>
                    <p>Low: {weather.main.temp_min}°F</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} mph</p>
                    <p>Conditions: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
import React, { useState } from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';
import './App.css'; // Import the CSS file

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const weatherCodeDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle: light',
    53: 'Drizzle: moderate',
    55: 'Drizzle: dense',
    61: 'Rain: slight',
    63: 'Rain: moderate',
    65: 'Rain: heavy',
    71: 'Snow fall: slight',
    73: 'Snow fall: moderate',
    75: 'Snow fall: heavy',
    80: 'Rain showers: slight',
    81: 'Rain showers: moderate',
    82: 'Rain showers: violent',
    95: 'Thunderstorm',
    96: 'Thunderstorm with hail',
    99: 'Thunderstorm with severe hail',
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    setWeatherData(null); // Clear previous data
    try {
      // Step 1: Get latitude and longitude for the city
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      if (!geoResponse.ok) throw new Error('City not found');
      const geoData = await geoResponse.json();
      if (geoData.results && geoData.results.length > 0) {
        const { latitude, longitude } = geoData.results[0];

        // Step 2: Fetch weather data
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        if (!weatherResponse.ok) throw new Error('Weather data not available');

        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);
      } else {
        throw new Error('City not found');
      }
    } catch (error) {
      setError(error.message || 'Failed to fetch data');
    }
    setLoading(false);
  };

  const clearData = () => {
    setCity('');
    setWeatherData(null);
    setError('');
  };

  // Function to choose an icon based on weather code
  const getWeatherIcon = (code) => {
    switch (code) {
      case 0:
        return <WiDaySunny size={60} className="text-yellow-500" />;
      case 1:
      case 2:
      case 3:
        return <WiCloudy size={60} className="text-gray-400" />;
      case 45:
      case 48:
        return <WiRain size={60} className="text-blue-400" />;
      case 51:
      case 61:
        return <WiThunderstorm size={60} className="text-gray-700" />;
      case 71:
      case 75:
        return <WiSnow size={60} className="text-blue-200" />;
      default:
        return <WiCloudy size={60} className="text-gray-300" />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4">
      <div className="weather-container">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700">
          Weather Now
        </h1>

        <input
          type="text"
          className="input-field"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className="flex space-x-2">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-all duration-300 shadow-md"
            onClick={fetchWeather}
          >
            Get Weather
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold p-3 rounded-lg transition-all duration-300 shadow-md"
            onClick={clearData}
          >
            Clear
          </button>
        </div>

        {loading && (
          <p className="text-center mt-4 text-gray-600 animate-pulse">
            Loading...
          </p>
        )}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}

        {weatherData && (
          <div className="mt-6 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">
              {city}
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {getWeatherIcon(weatherData.current_weather.weathercode)}
              <p className="text-4xl md:text-5xl font-bold text-gray-800">
                {weatherData.current_weather.temperature}°C
              </p>
            </div>

            <p className="text-lg mt-4 text-gray-800">
              Condition:{' '}
              {weatherCodeDescriptions[
                weatherData.current_weather.weathercode
              ] || 'Unknown'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

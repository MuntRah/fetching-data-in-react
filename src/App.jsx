
import * as weatherService from './services/weatherService';

import WeatherSearch from './components/WeatherSearch';
import { useState } from 'react';

// src/App.jsx
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const getWeather = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

const [weather, setWeather] = useState({})

return (
  <main>
    <h1>Weather API</h1>
    <WeatherSearch getWeather={getWeather} />
    <WeatherDetails weather={weather} />
  </main>
);
};

export default App;
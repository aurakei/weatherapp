
import { useState } from 'react';
import './App.css';
import CurrentWeather from './Components/currentWeather/currentWeather';
import Search from './Components/search/Search';
import {WEATHER_API_URL, WEATHER_API_KEY} from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon ] =searchData.value.split("");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}}`);
    
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) =>{
       const weatherResponse = await response[0].json();
       const forecastResponse = await response[1].json();
       setCurrentWeather({city: searchData.label , ...weatherResponse});
      })
      .catch((err) => console.log(err))
  
  }

  console.log(currentWeather);
  console.log(forecast);
  return (
    <>
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </>
  );
}

export default App; 

// src/services/weatherService.js
const API_KEY = 'cf3d20fdfa0e4fe3a3595125240708';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
 
    const data = await res.json();
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { show };
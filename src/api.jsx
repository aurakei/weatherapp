require('dotenv').config();
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3d509248emsh229f7737fd62c60p17b4d1jsneeecb5fed8ae',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = process.env.WEATHER_API_KEY


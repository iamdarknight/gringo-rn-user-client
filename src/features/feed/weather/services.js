// @flow
import axios from 'axios';
import { APP_ID } from './constants';

const CURRENT_WEATHER_API = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID={appId}';
const FIVE_DAY_WEATHER_API = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&APPID={appId}';
const SIXTEEN_DAY_WEATHER_API = 'api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&APPID={appId}';


const fetchWeather: Function =
 (location: Object) => axios({
   method: 'get',
   url: `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${location.latitude}&lon=${location.longitude}&APPID=${APP_ID}`,
 });

export default fetchWeather;

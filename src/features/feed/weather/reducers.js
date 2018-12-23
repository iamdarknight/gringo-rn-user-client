// @flow
import moment from 'moment';
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from './constants';
import type {  } from './types';

const initialState:  State = {
  fetching: false,
  error: null,
  currentWeatherIcon: 'day-sunny',
  currentPlaceName: 'Bulawayo, Zimbabwe',
  currentWeather: 'Clear sky',
  fiveDayWeatherForecast:
    [
      {
        id:  0,
        name: 'Monday',
        icon: 'day-sunny',
        tempRange:  '18°C/30°C',
        weather: 'Clear sky',
      },{
        id:  1,
        name: 'Tuesday',
        icon: 'day-sunny',
        tempRange:  '18°C/30°C',
        weather: 'Clear sky',
      },{
        id:  2,
        name: 'Wednesday',
        icon: 'day-sunny',
        tempRange:  '18°C/30°C',
        weather: 'Clear sky',
      },{
        id:  3,
        name: 'Thursday',
        icon: 'day-sunny',
        tempRange:  '18°C/30°C',
        weather: 'Clear sky',
      },{
        id:  4,
        name: 'Friday',
        icon: 'day-sunny',
        tempRange:  '18°C/30°C',
        weather: 'Clear sky',
      },
    ],
};

isDayNight = (time) => {
  if ( moment('600', 'hmm').hour() > moment.unix(time).hour() || moment.unix(time).hour() > moment('1800', 'HHmm').hour()) {
    return 'night';
  }
  return 'day';
};

const weather = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        fetching:  action.payload.data.fetching,
        error:  action.payload.data.error,
      };

    case API_CALL_SUCCESS:

      return {
        ...state,
        fetching:  action.payload.data.fetching,
        currentPlaceName: `${action.payload.data.weather.city.name}, ${action.payload.data.weather.city.country}`,
        currentWeather: action.payload.data.weather.list[0].weather[0].description,
        currentWeatherIcon: `owm-${this.isDayNight(action.payload.data.weather.list[0].dt)}-${action.payload.data.weather.list[0].weather[0].id}`,
        fiveDayWeatherForecast:  action.payload.data.weather.list,
      };

    case API_CALL_FAILURE:
      return {
        ...state,
        fetching:  action.payload.data.fetching,
        error:  action.payload.data.error,
      };

    default:
      return state;
  }
};

export default weather;

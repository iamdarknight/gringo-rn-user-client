// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { } from './types';
// selectors
const getFiveDayWeatherForecast = (state: Object): Object => state.FEED.WEATHER.fiveDayWeatherForecast;
const getCurrentPlaceName = state => state.FEED.WEATHER.currentPlaceName;
const getCurrentWeatherIcon = state => state.FEED.WEATHER.currentWeatherIcon;
const getCurrentWeather = state => state.FEED.WEATHER.currentWeather;

// reselect functions
export const makeFiveDayWeatherForecastState =
  (): SelectorCreator => createSelector(
    [getFiveDayWeatherForecast],
    (fiveDayWeatherForecast) => fiveDayWeatherForecast
  );

export const makeCurrentPlaceNameState =
  (): SelectorCreator => createSelector(
    [getCurrentPlaceName],
    (CurrentPlaceName) => CurrentPlaceName
  );

export const makeCurrentWeatherIconState =
  (): SelectorCreator => createSelector(
    [getCurrentWeatherIcon],
    (CurrentWeatherIcon) => CurrentWeatherIcon
  );

export const makeCurrentWeatherState =
  (): SelectorCreator => createSelector(
    [getCurrentWeather],
    (CurrentWeather) => CurrentWeather
  );

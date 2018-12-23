// @flow
import * as Actions from './constants';
import type { } from './types';

export const setSearching = (data): Action => ({
  type: Actions.SET_SEARCHING,
  payload: { data },
});
export const setHideToolbar = (data): Action => ({
  type: Actions.SET_HIDE_TOOLBAR,
  payload: { data },
});
export const setWeatherQuery = (data): Action => ({
  type: Actions.SET_WEATHER_QUERY,
  payload: { data },
});
export const setShowDirectMessages = (data): Action => ({
  type: Actions.SET_SHOW_DIRECT_MESSAGES,
  payload: { data },
});
export const setMapViewRegion = (data): Action => ({
  type: Actions.SET_MAP_VIEW_REGION,
  payload: { data },
});

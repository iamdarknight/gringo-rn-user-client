// @flow
import * as Actions from './constants';
import type { } from './types';

export const changeLiteMode = (): Action => ({
  type: Actions.CHANGE_LITE_MODE,
  payload: {
  },
});
export const changeMapType = (mapType): Action => ({
  type: Actions.CHANGE_MAP_TYPE,
  payload: {
    data: mapType,
  },
});
export const changeShowsLocation = (): Action => ({
  type: Actions.CHANGE_SHOW_LOCATION,
  payload: {
  },
});
export const changeShowsRecentLocations = (): Action => ({
  type: Actions.CHANGE_SHOW_RECENT_LOCATIONS,
  payload: {
  },
});
export const changeShowsTraffic = (): Action => ({
  type: Actions.CHANGE_SHOWS_TRAFFIC,
  payload: {
  },
});
export const changeCachesMaps = (): Action => ({
  type: Actions.CHANGE_CACHE_MAPS,
  payload: {
  },
});
export const setMapRegion = (location): Action => ({
  type: Actions.SET_MAP_REGION_TO,
  payload: {
    data: location,
  },
});

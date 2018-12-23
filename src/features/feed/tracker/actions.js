// @flow
import * as Actions from './constants';
import type { Accuracy } from './types';

export const changeTrackerAccuracy = (accuracy: Accuracy): Action => ({
  type: Actions.CHANGE_TRACKER_ACCURACY,
  payload: {
    data: accuracy,
  },
});
export const changeBackgroundTracking = (): Action => ({
  type: Actions.CHANGE_BACKGROUND_TRACKING,
  payload: {
  },
});
export const changeBatterySaver = (): Action => ({
  type: Actions.CHANGE_BATTERY_SAVER,
  payload: {
  },
});
export const changeLocationHistory = (): Action => ({
  type: Actions.CHANGE_LOCATION_HISTORY,
  payload: {
  },
});


export const setCurrentLocation = (location): Action => ({
  type: Actions.SET_CURRENT_LOCATION,
  payload: {
    data: location,
  },
});
export const setGpsSensorStatus = (status): Action => ({
  type: Actions.SET_GPS_SENSOR_STATUS,
  payload: {
    data: status,
  },
});
export const setGpsSensorAccess = (access): Action => ({
  type: Actions.SET_GPS_SENSOR_ACCESS,
  payload: {
    data: access,
  },
});
export const setLocationSet = (state): Action => ({
  type: Actions.SET_LOCATION_SET,
  payload: {
    data: state,
  },
});

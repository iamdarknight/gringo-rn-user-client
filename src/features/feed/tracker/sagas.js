// @flow
import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects';
import type {
  Saga,
} from 'redux-saga';
import * as Actions from './constants';
import type { Action } from './types';

function* trackerSaga(action: Action): Saga<void> {
  console.log(`${action} received`);
  switch (action.type) {
    case Actions.CHANGE_TRACKER_ACCURACY:
      yield put({
        type: Actions.SAVE_TRACKER_ACCURACY,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.CHANGE_BACKGROUND_TRACKING:
      yield put({
        type: Actions.SAVE_BACKGROUND_TRACKING,
        payload: {
        },
      });
      break;
    case Actions.CHANGE_BATTERY_SAVER:
      yield put({
        type: Actions.SAVE_BATTERY_SAVER,
        payload: {
        },
      });
      break;
    case Actions.CHANGE_LOCATION_HISTORY:
      yield put({
        type: Actions.SAVE_LOCATION_HISTORY,
        payload: {
        },
      });
      break;
    case Actions.SET_CURRENT_LOCATION:
      yield put({
        type: Actions.SAVE_CURRENT_LOCATION,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_GPS_SENSOR_STATUS:
      yield put({
        type: Actions.SAVE_GPS_SENSOR_STATUS,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_GPS_SENSOR_ACCESS:
      yield put({
        type: Actions.SAVE_GPS_SENSOR_ACCESS,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_LOCATION_SET:
      yield put({
        type: Actions.SAVE_LOCATION_SET,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default takeEvery([
  Actions.CHANGE_TRACKER_ACCURACY,
  Actions.CHANGE_BACKGROUND_TRACKING,
  Actions.CHANGE_BATTERY_SAVER,
  Actions.CHANGE_LOCATION_HISTORY,
  Actions.SET_CURRENT_LOCATION,
  Actions.SET_GPS_SENSOR_STATUS,
  Actions.SET_GPS_SENSOR_ACCESS,
  Actions.SET_LOCATION_SET,
], trackerSaga);

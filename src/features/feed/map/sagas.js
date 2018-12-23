// @flow
import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import type {
  Saga,
} from 'redux-saga';
import * as Actions from './constants';
import type { Action } from './types';

function* mapSaga(action: Action): Saga<void> {
  console.log(`${action} received`);
  switch (action.type) {
    case Actions.CHANGE_LITE_MODE:
      yield put({
        type: Actions.SAVE_LITE_MODE,
        payload: {
        },
      });
      break;
    case Actions.CHANGE_MAP_TYPE:
      yield put({
        type: Actions.SAVE_MAP_TYPE,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.CHANGE_SHOW_LOCATION:
      yield put({
        type: Actions.SAVE_SHOW_LOCATION,
        payload: {
        },
      });
      break;
    case Actions.CHANGE_SHOW_RECENT_LOCATIONS:
      yield put({
        type: Actions.SAVE_SHOW_RECENT_LOCATIONS,
        payload: {
        },
      });
      break;
    case Actions.CHANGE_SHOWS_TRAFFIC:
      yield put({
        type: Actions.SAVE_SHOWS_TRAFFIC,
        payload: {
        },
      });
      break;
    case Actions.CHANGE_CACHE_MAPS:
      yield put({
        type: Actions.SAVE_CACHE_MAPS,
        payload: {
        },
      });
      break;
    case Actions.SET_MAP_REGION_TO:
      yield put({
        type: Actions.SET_MAP_REGION,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default takeLatest([
  Actions.CHANGE_LITE_MODE,
  Actions.CHANGE_MAP_TYPE,
  Actions.CHANGE_SHOW_LOCATION,
  Actions.CHANGE_SHOW_RECENT_LOCATIONS,
  Actions.CHANGE_SHOWS_TRAFFIC,
  Actions.CHANGE_CACHE_MAPS,
  Actions.SET_MAP_REGION_TO,
], mapSaga);

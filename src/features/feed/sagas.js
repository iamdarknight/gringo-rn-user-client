// @flow
import type { Saga } from 'redux-saga';
import weatherSaga from '@gringo/weather/sagas';
import mapSaga from '@gringo/map/sagas';
import trackerSaga from '@gringo/tracker/sagas';
import searchSaga from '@gringo/search/sagas';
import {
  put,
  takeLatest,
  all,
} from 'redux-saga/effects';
import * as Actions from './constants';
import type { Action } from './types';

function* feedMainSaga(action: Action): Saga<void> {
  console.log(`${action} received`);
  switch (action.type) {
    case Actions.SET_SEARCHING:
      yield put({
        type: Actions.SAVE_SEARCHING,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_HIDE_TOOLBAR:
      yield put({
        type: Actions.SAVE_HIDE_TOOLBAR,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_WEATHER_QUERY:
      yield put({
        type: Actions.SAVE_WEATHER_QUERY,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_SHOW_DIRECT_MESSAGES:
      yield put({
        type: Actions.SAVE_SHOW_DIRECT_MESSAGES,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.SET_MAP_VIEW_REGION:
      yield put({
        type: Actions.SAVE_MAP_VIEW_REGION,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

const mainSaga = takeLatest([
  Actions.SET_SEARCHING,
  Actions.SET_HIDE_TOOLBAR,
  Actions.SET_WEATHER_QUERY,
  Actions.SET_SHOW_DIRECT_MESSAGES,
  Actions.SET_MAP_VIEW_REGION,
], feedMainSaga);

const feedSaga = [
  mainSaga,
  weatherSaga,
  mapSaga,
  trackerSaga,
  searchSaga,
];

export default feedSaga;

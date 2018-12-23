// @flow
import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import type {
  Saga,
} from 'redux-saga';
import * as Selector from '@gringo/map/selectors';
import fetchWeather  from './services';
import * as Actions from './constants';
import type { Action } from './types';

function* weatherMonitor(action: Action): Saga<void> {
  while (action.payload.data.active) {
    // Inform store about new request starting
    yield put({
      type: Actions.API_CALL_REQUEST,
      payload: {
        data: {
          fetching: true,
          error: null,
        },
      },
    });
    try {
      const { location } = action.payload.data;
      const weather = yield call(fetchWeather, location);
      console.log(weather);
      // Dispatch an action to set weather true
      yield put({
        type: Actions.API_CALL_SUCCESS,
        payload: {
          data: {
            weather: weather.data,
            fetching: false,
          },
        },
      });
    } catch (error) {
      // Dispatch an action to set weather false
      yield put({
        type: Actions.API_CALL_FAILURE,
        payload: {
          data: {
            fetching: false,
            error,
          },
        },
      });
    }
    yield call(delay, 60000);
  }
}

export default  takeLatest([Actions.START_SAGA,Actions.STOP_SAGA], weatherMonitor);

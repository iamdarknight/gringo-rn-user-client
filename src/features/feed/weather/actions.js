// @flow
import { START_SAGA, STOP_SAGA } from './constants';
import type { Action } from './types';

export const startWeatherSaga = (location): Action => ({
  type: START_SAGA,
  payload: {
    data:{ 
      active: true,
      location,
    },
  },
});

export const stopWeatherSaga = (): Action => ({
  type: STOP_SAGA,
  payload: {
    data: false,
  },
});

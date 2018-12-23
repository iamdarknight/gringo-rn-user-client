// @flow
import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects';
import type {
  Saga,
} from 'redux-saga';
import fetchPlaceInfo  from './services';
import * as Actions from './constants';
import type { Action } from './types';

function* billingSaga(action: Action): Saga<void> {
  console.log(`${action} received`);
  switch (action.type) {
    case Actions.EDIT_ADDRESS:
      try {
        const { placeID } = action.payload.data.place;
        const placeInfo = yield call(fetchPlaceInfo, placeID);
        yield put({
          type: Actions.SAVE_ADDRESS,
          payload: {
            data: {
              ...action.payload.data,
              placeInfo: placeInfo.data.result,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }

      break;
    case Actions.EDIT_TELEPHONE:
      yield put({
        type: Actions.SAVE_TELEPHONE,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default  takeEvery([Actions.EDIT_ADDRESS, Actions.EDIT_TELEPHONE], billingSaga);

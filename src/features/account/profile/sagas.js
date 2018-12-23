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

function* profileSaga(action: Action): Saga<void> {
  console.log(`${action} received`);
  switch (action.type) {
    case Actions.EDIT_NAME:
      yield put({
        type: Actions.SAVE_NAME,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.EDIT_AVATAR:
      yield put({
        type: Actions.SAVE_AVATAR,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.EDIT_ABOUT:
      yield put({
        type: Actions.SAVE_ABOUT,
        payload: {
          data: {
            text: action.payload.data,
            created: new Date(),
          },
        },
      });
      break;
    case Actions.EDIT_NUMBER:
      yield put({
        type: Actions.SAVE_NUMBER,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default takeEvery([Actions.EDIT_AVATAR, Actions.EDIT_ABOUT, Actions.EDIT_NAME, Actions.EDIT_NUMBER], profileSaga);

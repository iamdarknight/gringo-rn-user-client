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

function* channelSaga(action: Action): Saga<void> {
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

    case Actions.ADD_BROADCASTER:
      yield put({
        type: Actions.SAVE_BROADCASTER,
        payload: {
          data: action.payload.data,
        },
      });
      break;

    case Actions.EDIT_BIO:
      yield put({
        type: Actions.SAVE_BIO,
        payload: {
          data: action.payload.data,
        },
      });
      break;

    case Actions.SET_PRIVACY:
      yield put({
        type: Actions.SAVE_PRIVACY,
        payload: {
          data: action.payload.data,
        },
      });
      break;

    case Actions.SET_BROADCASTING:
      yield put({
        type: Actions.SAVE_BROADCASTING,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default takeEvery([Actions.EDIT_NAME, Actions.EDIT_AVATAR, Actions.ADD_BROADCASTER, Actions.EDIT_BIO, Actions.SET_PRIVACY, Actions.SET_BROADCASTING], channelSaga);

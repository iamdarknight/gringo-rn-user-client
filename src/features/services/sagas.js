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

function* servicesSaga(action: Action): Saga<void> {
  console.log(`${action} received`);
  switch (action.type) {
    case Actions.TOGGLE_CART:
      yield put({
        type: Actions.SAVE_TOGGLE_CART,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.TOGGLE_CATALOG:
      yield put({
        type: Actions.SAVE_TOGGLE_CATALOG,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.TOGGLE_CART_SELECTION:
      yield put({
        type: Actions.SAVE_TOGGLE_CART_SELECTION,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.INCREASE_CART_ITEM:
      yield put({
        type: Actions.SAVE_INCREASE_CART_ITEM,
        payload: {
          data: action.payload.data,
        },
      });
      break;
    case Actions.DECREASE_CART_ITEM:
      yield put({
        type: Actions.SAVE_DECREASE_CART_ITEM,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default takeEvery([Actions.TOGGLE_CART, Actions.TOGGLE_CATALOG, Actions.TOGGLE_CART_SELECTION, Actions.INCREASE_CART_ITEM, Actions.DECREASE_CART_ITEM], servicesSaga);

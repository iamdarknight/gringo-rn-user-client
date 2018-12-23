// @flow
import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import type {
  Saga,
} from 'redux-saga';
import fetchSearchQueryResults from './services';
import * as Actions from './constants';
import type { Action } from './types';

function* searchSaga(action: Action): Saga<void> {
  
  switch (action.type) {
    case Actions.SEARCH:
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
        const { query } = action.payload.data;
        const searchResults = yield call(fetchSearchQueryResults, query.replace(/\s+/g, '+'), location);
        console.log(searchResults);
        // Dispatch an action to set searchResults true
        yield put({
          type: Actions.API_CALL_SUCCESS,
          payload: {
            data: {
              searchResults: searchResults.data,
              fetching: false,
            },
          },
        });
      } catch (error) {
        // Dispatch an action to set searchResults false
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
      break;

    case Actions.VIEW_LOCATION:
      yield put({
        type: Actions.SAVE_LOCATION,
        payload: {
          data: action.payload.data,
        },
      });
      break;
  }
}

export default takeLatest([
  Actions.SEARCH,
  Actions.VIEW_LOCATION,
], searchSaga);

// @flow
import { all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import feedSaga from '@gringo/feed/sagas';
import accountSaga from '@gringo/account/sagas';
import servicesSaga from '@gringo/services/sagas';

export default function* rootSaga(): Saga<void> {
  yield all([
    ...feedSaga,
    ...accountSaga,
    servicesSaga,
  ]);
}

// @flow
import { all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import billingSaga from '@gringo/billing/sagas';
import channelSaga from '@gringo/account_channel/sagas';
import profileSaga from '@gringo/profile/sagas';

const accountSaga = [
  billingSaga,
  channelSaga,
  profileSaga,
];

export default accountSaga;

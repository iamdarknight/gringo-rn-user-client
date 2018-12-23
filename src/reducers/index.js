// @flow

import { combineReducers } from 'redux';
import ACCOUNT from '@gringo/account/reducers';
import FEED from '@gringo/feed/reducers';
import CHANNELS from '@gringo/channels/reducers';
import MESSAGING from '@gringo/messaging/reducers';
import SERVICES from '@gringo/services/reducers';

const reducers = {
  ACCOUNT,
  FEED,
  CHANNELS,
  MESSAGING,
  SERVICES,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);

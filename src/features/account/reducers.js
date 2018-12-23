// @flow

import { combineReducers } from 'redux';
import BACKUP from '@gringo/backup/reducers';
import CHANNEL from '@gringo/account_channel/reducers';
import BILLING from '@gringo/billing/reducers';
import PROFILE from '@gringo/profile/reducers';
import SOCIAL from '@gringo/socialAccounts/reducers';

const reducers = {
  BACKUP,
  BILLING,
  CHANNEL,
  PROFILE,
  SOCIAL,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);

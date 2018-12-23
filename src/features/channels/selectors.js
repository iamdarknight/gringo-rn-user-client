// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';
// selectors
const getSubscriptions = (state: Object): Object => state.CHANNELS.subscriptions;
const getStore = (state: Object): Object => state.CHANNELS.store;

// reselect functions
export const makeSubscriptionsState =
  (): SelectorCreator => createSelector(
    [getSubscriptions],
    Subscriptions => Subscriptions
  );

export const makeStoreState =
  (): SelectorCreator => createSelector(
    [getStore],
    Store => Store
  );

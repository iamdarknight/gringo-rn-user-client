// @flow
import * as Actions from './constants';
import type { } from './types';

export const search = (query, location): Action => ({
  type: Actions.SEARCH,
  payload: {
    data: {query, location},
  },
});

export const viewLocation = (place): Action => ({
  type: Actions.VIEW_LOCATION,
  payload: {
    data: {place},
  },
});
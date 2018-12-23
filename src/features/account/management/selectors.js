// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';
// selectors
const getName = (state: Object): Object => state.ACCOUNT.CHANNEL.name;
// reselect functions

export const makeNameState =
  (): Function => createSelector(
    [getName],
    (name: Name) => name
  );

// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';
// selectors
const getDirectMessages = (state: Object): Object => state.MESSAGING.messages;

// reselect functions
export const makeDirectMessagesState =
  (): SelectorCreator => createSelector(
    [getDirectMessages],
    (DirectMessages: boolean): boolean => DirectMessages
  );

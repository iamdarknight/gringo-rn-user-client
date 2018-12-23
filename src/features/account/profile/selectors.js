// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { } from './types';
// selectors
const getAvatar = (state: Object): Object => state.ACCOUNT.PROFILE.avatar;
const getName = (state: Object): Object => state.ACCOUNT.PROFILE.name;
const getAbout = (state: Object): Object => state.ACCOUNT.PROFILE.about.current.text;
const getAboutHistory = (state: Object): Object => state.ACCOUNT.PROFILE.about.history;
const getNumber = (state: Object): Object => state.ACCOUNT.PROFILE.number;

// reselect functions
export const makeAvatarState =
  (): SelectorCreator => createSelector(
    [getAvatar],
    (avatar: string) => avatar
  );
export const makeNameState =
  (): SelectorCreator => createSelector(
    [getName],
    (name: string) => name
  );
export const makeAboutState =
  (): SelectorCreator => createSelector(
    [getAbout],
    (about: string) => about
  );
export const makeAboutHistoryState =
  (): SelectorCreator => createSelector(
    [getAboutHistory],
    (aboutHistory: string) => aboutHistory
  );
export const makeNumberState =
  (): SelectorCreator => createSelector(
    [getNumber],
    (number: string) => number
  );

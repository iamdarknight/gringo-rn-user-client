// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';
// selectors
const getDst = (state: Object): Object => state.FEED.WEATHER.current.sys;

// reselect functions
export const makeDayLightSavingTimeState =
  (): Function => createSelector(
    [getDst],
    (dst: DST) => dst
  );

// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';
// selectors
const getSearching = (state: Object): Object => state.FEED.MAIN.searching;
const getWeatherQuery = (state: Object): Object => state.FEED.MAIN.weatherQuery;
const getShowDirectMessages = (state: Object): Object => state.FEED.MAIN.showDirectMessages;
const getHideToolbar = (state: Object): Object => state.FEED.MAIN.hideToolbar;
const getMapViewRegion = (state: Object): Object => state.FEED.MAIN.mapViewRegion;
const getFeed = (state: Object): Object => state.FEED.MAIN.feed;

// reSelect functions
export const makeFeedState =
  (): SelectorCreator => createSelector(
    [getFeed],
    Feed => Feed
  );
export const makeMapViewRegionState =
  (): SelectorCreator => createSelector(
    [getMapViewRegion],
    (MapViewRegion: string): string => MapViewRegion
  );
export const makeSearchingState =
  (): SelectorCreator => createSelector(
    [getSearching],
    (searching: boolean): boolean => searching
  );
export const makeWeatherQueryState =
  (): SelectorCreator => createSelector(
    [getWeatherQuery],
    (WeatherQuery: boolean): boolean => WeatherQuery
  );
export const makeShowDirectMessagesState =
  (): SelectorCreator => createSelector(
    [getShowDirectMessages],
    (ShowDirectMessages: boolean): boolean => ShowDirectMessages
  );
export const makeHideToolbarState =
  (): SelectorCreator => createSelector(
    [getHideToolbar],
    (HideToolbar: boolean): boolean => HideToolbar
  );

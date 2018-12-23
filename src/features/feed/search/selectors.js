// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { } from './types';
// selectors
const getTextSearchResponse = (state: Object): Object => state.FEED.SEARCH.textSearchResponse;
const getSuggestedPlace = (state: Object): Object => state.FEED.SEARCH.suggestedPlace;

// reselect functions
export const makeTextSearchResponseState =
  (): SelectorCreator => createSelector(
    [getTextSearchResponse],
    (textSearchResponse) => textSearchResponse
  );
export const makeSuggestedPlaceState =
  (): SelectorCreator => createSelector(
    [getSuggestedPlace],
    (suggestedPlace) => suggestedPlace
  );
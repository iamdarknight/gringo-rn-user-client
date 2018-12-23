// @flow
import moment from 'moment';
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, SAVE_LOCATION } from './constants';
import type { State, Action } from './types';

const initialState:  State = {
  textSearchResponse: [],
  suggestedPlace: {
    place: {
      latitude: 32,
      longitude: 32,
      name: '',
      placeID: 'jkhhg897867869',
      address: '',
    },
  },
};

const SearchFeed = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        fetching:  action.payload.data.fetching,
        error:  action.payload.data.error,
      };

    case API_CALL_SUCCESS:

      return {
        ...state,
        fetching:  action.payload.data.fetching,
        textSearchResponse: action.payload.data.searchResults.results,
        suggestedPlace: null,
      };

    case API_CALL_FAILURE:
      return {
        ...state,
        fetching:  action.payload.data.fetching,
        error:  action.payload.data.error,
      };

    case SAVE_LOCATION:

      return {
        ...state,
        fetching:  action.payload.data.fetching,
        textSearchResponse: [],
        suggestedPlace: action.payload.data,
      };

    default:
      return state;
  }
};

export default SearchFeed;

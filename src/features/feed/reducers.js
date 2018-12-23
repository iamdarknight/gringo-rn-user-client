// @flow

import { combineReducers } from 'redux';
import WEATHER from '@gringo/weather/reducers';
import MAP from '@gringo/map/reducers';
import TRACKER from '@gringo/tracker/reducers';
import SEARCH from '@gringo/search/reducers';
import {
  SAVE_SEARCHING,
  SAVE_HIDE_TOOLBAR,
  SAVE_WEATHER_QUERY,
  SAVE_SHOW_DIRECT_MESSAGES,
  SAVE_MAP_VIEW_REGION,
  SAVE_MARKER_WINDOW,
} from './constants';
import type { State, Action } from './types';

const initialState = {
  searching: false,
  weatherQuery: false,
  hideToolbar: true,
  showDirectMessages: false,
  mapViewRegion: {},
  feed: [
    {
      id: 798,
      message: 'This summer is hot!! We need to drink water and stay in the shed.',
      location: {
        latitude: -18.74408202330032,
        longitude: 32.326812767237425,
      },
      poster: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/baking.jpg',
      source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
      stream: '',
      link: 'https://techcrunch.com/',
      created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
      likes: 33,
      broadcaster: null,
      channel: {
        name: 'FreshInABox',
        avatar: 'https://pbs.twimg.com/profile_images/1056556181039300609/8PHmGQfU_400x400.jpg',
      },
      type: 'video',
    },
  ],
};

const MAIN = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_SEARCHING:
      return {
        ...state,
        searching: action.payload.data,
      };
    case SAVE_HIDE_TOOLBAR:
      return {
        ...state,
        hideToolbar: action.payload.data,
      };
    case SAVE_WEATHER_QUERY:
      return {
        ...state,
        weatherQuery: action.payload.data,
      };
    case SAVE_SHOW_DIRECT_MESSAGES:
      return {
        ...state,
        showDirectMessages: action.payload.data,
      };

    case SAVE_MAP_VIEW_REGION:
      return {
        ...state,
        mapViewRegion: action.payload.data,
      };

    default:
      return state;
  }
};


const reducers = {
  MAIN,
  WEATHER,
  MAP,
  TRACKER,
  SEARCH,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);

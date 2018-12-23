// @flow

import { PROVIDER_GOOGLE } from 'react-native-maps';
import Theme from '@gringo/styles/global';
import {
  SAVE_LITE_MODE,
  SAVE_MAP_TYPE,
  SAVE_SHOW_LOCATION,
  SAVE_SHOW_RECENT_LOCATIONS,
  SAVE_SHOWS_TRAFFIC,
  SAVE_CACHE_MAPS,
  SET_MAP_REGION,
} from './constants';
import type { State, Action } from './types';

const { colors } = Theme;
const initialState = {
  poiClicked: [{}],
  favoritePoi: [{}],
  showRecentLocations: false,
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  camera: {
    center: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pitch: 0,
    heading: 0,

    // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
    altitude: 5000,

    // Only when using Google Maps.
    zoom: 12,
  },
  viewedRegions: [
    {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  ],

  provider: PROVIDER_GOOGLE,
  mapPadding: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  paddingAdjustmentBehavior: 'always',
  liteMode: false,
  customMapStyle: [],
  mapType: {
    'label': 'Standard',
    'value': 'standard',
  },
  showsUserLocation: false,
  userLocationAnnotationTitle: 'Gringo',
  followsUserLocation: false,
  showsMyLocationButton: false,
  showsPointsOfInterest: true,
  showsCompass: true,
  showsScale: true,
  showsBuildings: true,
  showsTraffic: true,
  showsIndoors: true,
  showsIndoorLevelPicker: true,
  zoomEnabled: true,
  zoomControlEnabled: false,
  minZoomLevel: 0,
  maxZoomLevel: 20,
  rotateEnabled: true,
  scrollEnabled: true,
  pitchEnabled: true,
  toolbarEnabled: false,
  cacheEnabled: false,
  loadingEnabled: true,
  loadingIndicatorColor: colors.primary,
  loadingBackgroundColor: colors.accent,
  moveOnMarkerPress: true,
  legalLabelInsets: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  kmlSrc: '',
};

const MapFeed = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_LITE_MODE:
      return {
        ...state,
        liteMode: !state.liteMode,
      };
    case SAVE_MAP_TYPE:
      return {
        ...state,
        mapType: action.payload.data,
      };
    case SAVE_SHOW_LOCATION:
      return {
        ...state,
        showsUserLocation: !state.showsUserLocation,
      };

    case SAVE_SHOW_RECENT_LOCATIONS:
      return {
        ...state,
        showRecentLocations: !state.showRecentLocations,
      };

    case SAVE_SHOWS_TRAFFIC:
      return {
        ...state,
        showsTraffic: !state.showsTraffic,
      };

    case SAVE_CACHE_MAPS:
      return {
        ...state,
        cacheEnabled: !state.cacheEnabled,
      };

    case SET_MAP_REGION:
      return {
        ...state,
        region: {
          latitude: action.payload.data.latitude,
          longitude: action.payload.data.longitude,
          latitudeDelta: action.payload.data.latitudeDelta || state.region.latitudeDelta,
          longitudeDelta: action.payload.data.longitudeDelta || state.region.longitudeDelta,
        },
      };
    default:
      return state;
  }
};

export default MapFeed;

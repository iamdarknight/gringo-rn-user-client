// ACCOUNT REDUCERS
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import Theme from '@gringo/styles/global';
import {
  SAVE_TRACKER_ACCURACY,
  SAVE_BACKGROUND_TRACKING,
  SAVE_BATTERY_SAVER,
  SAVE_LOCATION_HISTORY,
  SAVE_CURRENT_LOCATION,
  SAVE_GPS_SENSOR_STATUS,
  SAVE_GPS_SENSOR_ACCESS,
  SAVE_LOCATION_SET,
} from './constants';
import type { State, Action } from './types';

const { colors } = Theme;

const initialState: State = {
  recentLocations: {
    tracking: true,
    maxLocations: 100,
    locations: [{
      id: 0,
      provider: '',
      locationProvider: 0,
      time: 0,
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      speed: 0,
      altitude: 0,
      bearing: 0,
      isFromMockProvider: false,
      mockLocationsEnabled: false,
    }],
  },
  currentLocation: {
    id: 0,
    provider: '',
    locationProvider: 0,
    time: 0,
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    speed: 0,
    altitude: 0,
    bearing: 0,
    isFromMockProvider: false,
    mockLocationsEnabled: false,
  },
  currentActivity: {
    confidence: 0,
    type: 'UNKNOWN',
  },
  desiredAccuracy: {
    label: 'High',
    value: BackgroundGeolocation.HIGH_ACCURACY,
  },
  stationaryRadius: 50,
  distanceFilter: 50,
  notificationTitle: 'Gringo',
  notificationText: 'Monitoring your location',
  notificationIconColor: colors.primary,
  // notificationIconLarge: '../../../../android/app/src/main/res/drawable-xhdpi/notification.png',
  // notificationIconSmall: '../../../../android/app/src/main/res/drawable-xdpi/notification.png',
  notificationsEnabled: true,
  locationSet: false,
  gpsSensorAccess: 0,
  gpsSensorStatus: false,
  debug: true,
  startOnBoot: false,
  stopOnTerminate: true,
  startForeground: false,
  locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
  interval: 30000,
  fastestInterval: 20000,
  activitiesInterval: 20000,
  stopOnStillActivity: true,
  url: 'http://192.168.81.15:3000/location',
  syncUrl: 'http://192.168.1.104:3000/sync',
  syncThreshold: 100,
  httpHeaders: {
    'X-FOO': 'bar',
  },
  // customize post properties
  postTemplate: {
    lat: '@latitude',
    lon: '@longitude',
    foo: 'bar', // you can also add your own properties
  },
  saveBatteryOnBackground: true,
  activityType: 'Fitness',
  pauseLocationUpdates: false,
};

const TrackerFeed = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_BACKGROUND_TRACKING:
      return {
        ...state,
        startOnBoot: !state.startOnBoot,
      };
    case SAVE_TRACKER_ACCURACY:
      return {
        ...state,
        desiredAccuracy: action.payload.data,
      };
    case SAVE_BATTERY_SAVER:
      return {
        ...state,
        stopOnTerminate: !state.stopOnTerminate,
      };

    case SAVE_LOCATION_HISTORY:
      return {
        ...state,
        recentLocations: {
          ...state.recentLocations,
          tracking: !state.recentLocations.tracking,
        },
      };
    case SAVE_GPS_SENSOR_STATUS:
      return {
        ...state,
        gpsSensorStatus: action.payload.data,
      };
    case SAVE_GPS_SENSOR_ACCESS:
      return {
        ...state,
        gpsSensorAccess: action.payload.data,
      };
    case SAVE_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload.data,
      };
    case SAVE_LOCATION_SET:
      return {
        ...state,
        locationSet: action.payload.data,
      };

    default:
      return state;
  }
};

export default TrackerFeed;

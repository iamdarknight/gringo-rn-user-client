// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { Location, Activity, Headers, Template, RecentLocations, Accuracy } from './types';
// selectors
const getRecentLocations = (state: Object): RecentLocations => state.FEED.TRACKER.recentLocations;
const getCurrentLocation = (state: Object): Location => state.FEED.TRACKER.currentLocation;
const getCurrentActivity = (state: Object): Activity => state.FEED.TRACKER.currentActivity;
const getDesiredAccuracy = (state: Object): Accuracy => state.FEED.TRACKER.desiredAccuracy;
const getStationaryRadius = (state: Object): number => state.FEED.TRACKER.stationaryRadius;
const getDistanceFilter = (state: Object): number => state.FEED.TRACKER.distanceFilter;
const getNotificationTitle = (state: Object): string => state.FEED.TRACKER.notificationTitle;
const getNotificationText = (state: Object): string => state.FEED.TRACKER.notificationText;
const getNotificationIconColor = (state: Object): string => state.FEED.TRACKER.notificationIconColor;
const getNotificationIconLarge = (state: Object): string => state.FEED.TRACKER.notificationIconLarge;
const getNotificationIconSmall = (state: Object): string => state.FEED.TRACKER.notificationIconSmall;
const getSaveBatteryOnBackground = (state: Object): string => state.FEED.TRACKER.saveBatteryOnBackground;
const getDebug = (state: Object): boolean => state.FEED.TRACKER.debug;
const getStartOnBoot = (state: Object): boolean => state.FEED.TRACKER.startOnBoot;
const getStopOnTerminate = (state: Object): boolean => state.FEED.TRACKER.stopOnTerminate;
const getStartForeground = (state: Object): string => state.FEED.TRACKER.startForeground;
const getActivityType = (state: Object): string => state.FEED.TRACKER.activityType;
const getPauseLocationUpdates = (state: Object): string => state.FEED.TRACKER.pauseLocationUpdates;
const getMaxLocations = (state: Object): string => state.FEED.TRACKER.maxLocations;
const getLocationProvider = (state: Object): string => state.FEED.TRACKER.locationProvider;
const getInterval = (state: Object): number => state.FEED.TRACKER.interval;
const getFastestInterval = (state: Object): number => state.FEED.TRACKER.fastestInterval;
const getActivitiesInterval = (state: Object): number => state.FEED.TRACKER.activitiesInterval;
const getStopOnStillActivity = (state: Object): boolean => state.FEED.TRACKER.stopOnStillActivity;
const getUrl = (state: Object): string => state.FEED.TRACKER.url;
const getSyncUrl = (state: Object): string => state.FEED.TRACKER.syncUrl;
const getSyncThreshold = (state: Object): string => state.FEED.TRACKER.syncThreshold;
const getHttpHeaders = (state: Object): Headers => state.FEED.TRACKER.httpHeaders;
// customize post properties
const getPostTemplate = (state: Object): Template => state.FEED.TRACKER.postTemplate;

const getLocationSet = (state: Object): boolean => state.FEED.TRACKER.locationSet;
const getGpsSensorAccess = (state: Object): number => state.FEED.TRACKER.gpsSensorAccess;
const getNotificationsEnabled = (state: Object): booolean => state.FEED.TRACKER.notificationsEnabled;
const getGpsSensorStatus = (state: Object): boolean => state.FEED.TRACKER.gpsSensorStatus;
// reselect functions

export const makeLocationSetState =
  (): SelectorCreator => createSelector(
    [getLocationSet],
    (LocationSet: boolean): boolean => LocationSet
  );
export const makeGpsSensorAccessState =
  (): SelectorCreator => createSelector(
    [getGpsSensorAccess],
    (GpsSensorAccess: number): number => GpsSensorAccess
  );
export const makeNotificationsEnabledState =
  (): SelectorCreator => createSelector(
    [getNotificationsEnabled],
    (NotificationsEnabled: boolean): boolean => NotificationsEnabled
  );
export const makeGpsSensorStatusState =
  (): SelectorCreator => createSelector(
    [getGpsSensorStatus],
    (GpsSensorStatus: boolean): boolean => GpsSensorStatus
  );
export const makeNotificationIconColorState =
  (): SelectorCreator => createSelector(
    [getNotificationIconColor],
    (NotificationIconColor: string): string => NotificationIconColor
  );
export const makeNotificationIconLargeState =
  (): SelectorCreator => createSelector(
    [getNotificationIconLarge],
    (NotificationIconLarge: string): string => NotificationIconLarge
  );
export const makeNotificationIconSmallState =
  (): SelectorCreator => createSelector(
    [getNotificationIconSmall],
    (NotificationIconSmall: string): string => NotificationIconSmall
  );
export const makeSaveBatteryOnBackgroundState =
  (): SelectorCreator => createSelector(
    [getSaveBatteryOnBackground],
    (SaveBatteryOnBackground: boolean): boolean => SaveBatteryOnBackground
  );
export const makeStartForegroundState =
  (): SelectorCreator => createSelector(
    [getStartForeground],
    (StartForeground: boolean): boolean => StartForeground
  );
export const makeActivityTypeState =
  (): SelectorCreator => createSelector(
    [getActivityType],
    (ActivityType: Object): Object => ActivityType
  );
export const makePauseLocationUpdatesState =
  (): SelectorCreator => createSelector(
    [getPauseLocationUpdates],
    (PauseLocationUpdates: boolean): boolean => PauseLocationUpdates
  );
export const makeMaxLocationsState =
  (): SelectorCreator => createSelector(
    [getMaxLocations],
    (MaxLocations: number): number => MaxLocations
  );
export const makeSyncUrlState =
  (): SelectorCreator => createSelector(
    [getSyncUrl],
    (syncUrl: string): string => syncUrl
  );
export const makeSyncThresholdState =
  (): SelectorCreator => createSelector(
    [getSyncThreshold],
    (syncThreshold: number): number => syncThreshold
  );
export const makeRecentLocationsState =
  (): SelectorCreator => createSelector(
    [getRecentLocations],
    (recentLocations: RecentLocations): RecentLocations => recentLocations
  );
export const makeCurrentLocationState =
  (): SelectorCreator => createSelector(
    [getCurrentLocation],
    (CurrentLocation: Location): Location => CurrentLocation
  );
export const makeCurrentActivityState =
  (): SelectorCreator => createSelector(
    [getCurrentActivity],
    (CurrentActivity: Activity): Activity => CurrentActivity
  );
export const makeDesiredAccuracyState =
  (): SelectorCreator => createSelector(
    [getDesiredAccuracy],
    (DesiredAccuracy: Accuracy): Accuracy => DesiredAccuracy
  );
export const makeStationaryRadiusState =
  (): SelectorCreator => createSelector(
    [getStationaryRadius],
    (StationaryRadius: number): number => StationaryRadius
  );
export const makeDistanceFilterState =
  (): SelectorCreator => createSelector(
    [getDistanceFilter],
    (DistanceFilter: number): number => DistanceFilter
  );
export const makeNotificationTitleState =
  (): SelectorCreator => createSelector(
    [getNotificationTitle],
    (NotificationTitle: string): string => NotificationTitle
  );
export const makeNotificationTextState =
  (): SelectorCreator => createSelector(
    [getNotificationText],
    (NotificationText: string): string => NotificationText
  );
export const makeDebugState =
  (): SelectorCreator => createSelector(
    [getDebug],
    (Debug: boolean): boolean => Debug
  );
export const makeStartOnBootState =
  (): SelectorCreator => createSelector(
    [getStartOnBoot],
    (StartOnBoot: boolean): boolean => StartOnBoot
  );
export const makeStopOnTerminateState =
  (): SelectorCreator => createSelector(
    [getStopOnTerminate],
    (StopOnTerminate: boolean): boolean => StopOnTerminate
  );
export const makeLocationProviderState =
  (): SelectorCreator => createSelector(
    [getLocationProvider],
    (LocationProvider: string): string => LocationProvider
  );
export const makeIntervalState =
  (): SelectorCreator => createSelector(
    [getInterval],
    (Interval: number): number => Interval
  );
export const makeFastestIntervalState =
  (): SelectorCreator => createSelector(
    [getFastestInterval],
    (FastestInterval: number): number => FastestInterval
  );
export const makeActivitiesIntervalState =
  (): SelectorCreator => createSelector(
    [getActivitiesInterval],
    (ActivitiesInterval: number): number => ActivitiesInterval
  );
export const makeStopOnStillActivityState =
  (): SelectorCreator => createSelector(
    [getStopOnStillActivity],
    (StopOnStillActivity: boolean): boolean => StopOnStillActivity
  );
export const makeUrlState =
  (): SelectorCreator => createSelector(
    [getUrl],
    (Url: string): string => Url
  );
export const makeHttpHeadersState =
  (): SelectorCreator => createSelector(
    [getHttpHeaders],
    (HttpHeaders: Headers): Headers => HttpHeaders
  );
export const makePostTemplateState =
  (): SelectorCreator => createSelector(
    [getPostTemplate],
    (postTemplate: Template): Template => postTemplate
  );

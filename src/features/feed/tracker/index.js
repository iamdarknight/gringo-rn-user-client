// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import * as Selectors from './selectors';
import {
  setCurrentLocation,
  setGpsSensorStatus,
  setGpsSensorAccess,
  setLocationSet,
} from './actions';
import type { Dispatch } from './types';

const makeMapStateToProps = (): Object => {
  const getDesiredAccuracy = Selectors.makeDesiredAccuracyState();
  const getStationaryRadius = Selectors.makeStationaryRadiusState();
  const getDistanceFilter = Selectors.makeDistanceFilterState();
  const getNotificationTitle = Selectors.makeNotificationTitleState();
  const getNotificationText = Selectors.makeNotificationTextState();
  const getDebug = Selectors.makeDebugState();
  const getStartOnBoot = Selectors.makeStartOnBootState();
  const getStopOnTerminate = Selectors.makeStopOnTerminateState();
  const getLocationProvider = Selectors.makeLocationProviderState();
  const getInterval = Selectors.makeIntervalState();
  const getFastestInterval = Selectors.makeFastestIntervalState();
  const getActivitiesInterval = Selectors.makeActivitiesIntervalState();
  const getStopOnStillActivity = Selectors.makeStopOnStillActivityState();
  const getNotificationIconColor = Selectors.makeNotificationIconColorState();
  const getUrl = Selectors.makeUrlState();
  const getSyncUrl = Selectors.makeSyncUrlState();
  const getSyncThreshold = Selectors.makeSyncThresholdState();
  const getNotificationIconLarge = Selectors.makeNotificationIconLargeState();
  const getNotificationIconSmall = Selectors.makeNotificationIconSmallState();
  const getSaveBatteryOnBackground = Selectors.makeSaveBatteryOnBackgroundState();
  const getActivityType = Selectors.makeActivityTypeState();
  const getPauseLocationUpdates = Selectors.makePauseLocationUpdatesState();
  const getMaxLocations = Selectors.makeMaxLocationsState();
  const getStartForeground = Selectors.makeStartForegroundState();
  const getHttpHeaders = Selectors.makeHttpHeadersState();
  const getPostTemplate = Selectors.makePostTemplateState();

  const mapStateToProps = (state: Object): Object => ({
    desiredAccuracy: getDesiredAccuracy(state),
    stationaryRadius: getStationaryRadius(state),
    distanceFilter: getDistanceFilter(state),
    notificationTitle: getNotificationTitle(state),
    notificationText: getNotificationText(state),
    debug: getDebug(state),
    startOnBoot: getStartOnBoot(state),
    stopOnTerminate: getStopOnTerminate(state),
    locationProvider: getLocationProvider(state),
    interval: getInterval(state),
    fastestInterval: getFastestInterval(state),
    activitiesInterval: getActivitiesInterval(state),
    stopOnStillActivity: getStopOnStillActivity(state),
    notificationIconColor: getNotificationIconColor(state),
    url: getUrl(state),
    syncUrl: getSyncUrl(state),
    syncThreshold: getSyncThreshold(state),
    notificationIconLarge: getNotificationIconLarge(state),
    notificationIconSmall: getNotificationIconSmall(state),
    saveBatteryOnBackground: getSaveBatteryOnBackground(state),
    activityType: getActivityType(state),
    pauseLocationUpdates: getPauseLocationUpdates(state),
    maxLocations: getMaxLocations(state),
    startForeground: getStartForeground(state),
    httpHeaders: getHttpHeaders(state),
    postTemplate: getPostTemplate(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    setCurrentLocation,
    setGpsSensorStatus,
    setGpsSensorAccess,
    setLocationSet,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

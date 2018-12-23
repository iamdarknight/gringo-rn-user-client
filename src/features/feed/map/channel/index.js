// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  makeCurrentLocationState,
} from '@gringo/tracker/selectors';
import Component from './component';
import * as Selectors from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getCurrentLocation = makeCurrentLocationState();

  const getShowRecentLocationsState = Selectors.makeShowRecentLocationsState();
  const getRegion = Selectors.makeRegionState();
  const getCamera = Selectors.makeCameraState();
  const getViewedRegions = Selectors.makeViewedRegionsState();
  const getProvider = Selectors.makeProviderState();
  const getPaddingAdjustmentBehavior = Selectors.makePaddingAdjustmentBehaviorState();
  const getLiteMode = Selectors.makeLiteModeState();
  const getCustomMapStyle = Selectors.makeCustomMapStyleState();
  const getMapType = Selectors.makeMapTypeState();
  const getShowsUserLocation = Selectors.makeShowsUserLocationState();
  const getUserLocationAnnotationTitle = Selectors.makeUserLocationAnnotationTitleState();
  const getFollowsUserLocation = Selectors.makeFollowsUserLocationState();
  const getShowsMyLocationButton = Selectors.makeShowsMyLocationButtonState();
  const getShowsPointsOfInterest = Selectors.makeShowsPointsOfInterestState();
  const getShowsCompass = Selectors.makeShowsCompassState();
  const getShowsScale = Selectors.makeShowsScaleState();
  const getShowsBuildings = Selectors.makeShowsBuildingsState();
  const getShowsTraffic = Selectors.makeShowsTrafficState();
  const getShowsIndoors = Selectors.makeShowsIndoorsState();
  const getShowsIndoorLevelPicker = Selectors.makeShowsIndoorLevelPickerState();
  const getZoomEnabled = Selectors.makeZoomEnabledState();
  const getZoomControlEnabled = Selectors.makeZoomControlEnabledState();
  const getMinZoomLevel = Selectors.makeMinZoomLevelState();
  const getMaxZoomLevel = Selectors.makeMaxZoomLevelState();
  const getRotateEnabled = Selectors.makeRotateEnabledState();
  const getScrollEnabled = Selectors.makeScrollEnabledState();
  const getPitchEnabled = Selectors.makePitchEnabledState();
  const getToolbarEnabled = Selectors.makeToolbarEnabledState();
  const getCacheEnabled = Selectors.makeCacheEnabledState();
  const getLoadingEnabled = Selectors.makeLoadingEnabledState();
  const getLoadingIndicatorColor = Selectors.makeLoadingIndicatorColorState();
  const getLoadingBackgroundColor = Selectors.makeLoadingBackgroundColorState();
  const getMoveOnMarkerPress = Selectors.makeMoveOnMarkerPressState();
  const getLegalLabelInsets = Selectors.makeLegalLabelInsetsState();
  const getKmlSrc = Selectors.makeKmlSrcState();

  const mapStateToProps = (state: Object): Object => ({
    currentLocation: getCurrentLocation(state),
    region: getRegion(state),
    camera: getCamera(state),
    viewedRegions: getViewedRegions(state),
    provider: getProvider(state),
    // mapPadding: getMapPadding(state),
    paddingAdjustmentBehavior: getPaddingAdjustmentBehavior(state),
    liteMode: getLiteMode(state),
    customMapStyle: getCustomMapStyle(state),
    mapType: getMapType(state),
    showsUserLocation: getShowsUserLocation(state),
    userLocationAnnotationTitle: getUserLocationAnnotationTitle(state),
    followsUserLocation: getFollowsUserLocation(state),
    showsMyLocationButton: getShowsMyLocationButton(state),
    showsPointsOfInterest: getShowsPointsOfInterest(state),
    showsCompass: getShowsCompass(state),
    showsScale: getShowsScale(state),
    showsBuildings: getShowsBuildings(state),
    showsTraffic: getShowsTraffic(state),
    showsIndoors: getShowsIndoors(state),
    showsIndoorLevelPicker: getShowsIndoorLevelPicker(state),
    zoomEnabled: getZoomEnabled(state),
    zoomControlEnabled: getZoomControlEnabled(state),
    minZoomLevel: getMinZoomLevel(state),
    maxZoomLevel: getMaxZoomLevel(state),
    rotateEnabled: getRotateEnabled(state),
    scrollEnabled: getScrollEnabled(state),
    pitchEnabled: getPitchEnabled(state),
    toolbarEnabled: getToolbarEnabled(state),
    cacheEnabled: getCacheEnabled(state),
    loadingEnabled: getLoadingEnabled(state),
    loadingIndicatorColor: getLoadingIndicatorColor(state),
    loadingBackgroundColor: getLoadingBackgroundColor(state),
    // moveOnMarkerPress: getNoveOnMarkerPress(state),
    legalLabelInsets: getLegalLabelInsets(state),
    kmlSrc: getKmlSrc(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

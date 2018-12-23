// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { Location, Region } from './types';
// selectors
const getPoiClicked = (state: Object): Array<Location> => state.FEED.MAP.poiClicked;
const getFavoritePoi = (state: Object): Array<Location> => state.FEED.MAP.favoritePoi;
const getShowRecentLocations = (state: Object): boolean => state.FEED.MAP.showRecentLocations;
const getRegion = (state: Object): Region => state.FEED.MAP.region;
const getCamera = (state: Object): Camera => state.FEED.MAP.camera;
const getViewedRegions = (state: Object): Array<Region> => state.FEED.MAP.viewedRegions;
const getProvider = (state: Object): string => state.FEED.MAP.provider;
const getPaddingAdjustmentBehavior = (state: Object): Object => state.FEED.MAP.paddingAdjustmentBehavior;
const getLiteMode = (state: Object): boolean => state.FEED.MAP.liteMode;
const getCustomMapStyle = (state: Object): Object => state.FEED.MAP.customMapStyle;
const getMapType = (state: Object): Object => state.FEED.MAP.mapType;
const getShowsUserLocation = (state: Object): boolean => state.FEED.MAP.showsUserLocation;
const getUserLocationAnnotationTitle = (state: Object): string => state.FEED.MAP.userLocationAnnotationTitle;
const getFollowsUserLocation = (state: Object): boolean => state.FEED.MAP.followsUserLocation;
const getShowsMyLocationButton = (state: Object): boolean => state.FEED.MAP.showsMyLocationButton;
const getShowsPointsOfInterest = (state: Object): boolean => state.FEED.MAP.showsPointsOfInterest;
const getShowsCompass = (state: Object): boolean => state.FEED.MAP.showsCompass;
const getShowsScale = (state: Object): boolean => state.FEED.MAP.showsScale;
const getShowsBuildings = (state: Object): boolean => state.FEED.MAP.showsBuildings;
const getShowsTraffic = (state: Object): boolean => state.FEED.MAP.showsTraffic;
const getShowsIndoors = (state: Object): boolean => state.FEED.MAP.showsIndoors;
const getShowsIndoorLevelPicker = (state: Object): boolean => state.FEED.MAP.showsIndoorLevelPicker;
const getZoomEnabled = (state: Object): boolean => state.FEED.MAP.zoomEnabled;
const getZoomControlEnabled = (state: Object): boolean => state.FEED.MAP.zoomControlEnabled;
const getMinZoomLevel = (state: Object): number => state.FEED.MAP.minZoomLevel;
const getMaxZoomLevel = (state: Object): number => state.FEED.MAP.maxZoomLevel;
const getRotateEnabled = (state: Object): boolean => state.FEED.MAP.rotateEnabled;
const getScrollEnabled = (state: Object): boolean => state.FEED.MAP.scrollEnabled;
const getPitchEnabled = (state: Object): boolean => state.FEED.MAP.pitchEnabled;
const getToolbarEnabled = (state: Object): boolean => state.FEED.MAP.toolbarEnabled;
const getCacheEnabled = (state: Object): boolean => state.FEED.MAP.cacheEnabled;
const getLoadingEnabled = (state: Object): boolean => state.FEED.MAP.loadingEnabled;
const getLoadingIndicatorColor = (state: Object): string => state.FEED.MAP.loadingIndicatorColor;
const getLoadingBackgroundColor = (state: Object): string => state.FEED.MAP.loadingBackgroundColor;
const getMoveOnMarkerPress = (state: Object): boolean => state.FEED.MAP.MoveOnMarkerPress;
const getLegalLabelInsets = (state: Object): Object => state.FEED.MAP.legalLabelInsets;
const getKmlSrc = (state: Object): Object => state.FEED.MAP.kmlSrc;

// reselect functions
export const makePoiClickedState =
  (): SelectorCreator => createSelector(
    [getPoiClicked],
    (poiClicked: Location): Location => poiClicked
  );
export const makeFavoritePoiState =
  (): SelectorCreator => createSelector(
    [getFavoritePoi],
    (favoritePoi: Location): Location => favoritePoi
  );
export const makeShowRecentLocationsState =
  (): SelectorCreator => createSelector(
    [getShowRecentLocations],
    (showRecentLocations: boolean): boolean => showRecentLocations
  );
export const makeRegionState =
  (): SelectorCreator => createSelector(
    [getRegion],
    (region: Region): Region => region
  );
export const makeCameraState =
  (): SelectorCreator => createSelector(
    [getCamera],
    (camera: Camera): Camera => camera
  );
export const makeViewedRegionsState =
  (): SelectorCreator => createSelector(
    [getViewedRegions],
    (regions: Array<Region>): Array<Region> => regions
  );
export const makeProviderState =
  (): SelectorCreator => createSelector(
    [getProvider],
    (provider: string): string => provider
  );
export const makePaddingAdjustmentBehaviorState =
  (): SelectorCreator => createSelector(
    [getPaddingAdjustmentBehavior],
    (paddingAdjustmentBehavior: Object): Object => paddingAdjustmentBehavior
  );
export const makeLiteModeState =
  (): SelectorCreator => createSelector(
    [getLiteMode],
    (liteMode: boolean): boolean => liteMode
  );
export const makeCustomMapStyleState =
  (): SelectorCreator => createSelector(
    [getCustomMapStyle],
    (liteMode: boolean): boolean => liteMode
  );
export const makeMapTypeState =
  (): SelectorCreator => createSelector(
    [getMapType],
    (mapType: string): string => mapType
  );
export const makeShowsUserLocationState =
  (): SelectorCreator => createSelector(
    [getShowsUserLocation],
    (showsUserLocation: boolean): boolean => showsUserLocation
  );
export const makeUserLocationAnnotationTitleState =
  (): SelectorCreator => createSelector(
    [getUserLocationAnnotationTitle],
    (userLocationAnnotationTitle: string): string => userLocationAnnotationTitle
  );
export const makeFollowsUserLocationState =
  (): SelectorCreator => createSelector(
    [getFollowsUserLocation],
    (followsUserLocation: boolean): boolean => followsUserLocation
  );
export const makeShowsMyLocationButtonState =
  (): SelectorCreator => createSelector(
    [getShowsMyLocationButton],
    (showsMyLocationButton: boolean): boolean => showsMyLocationButton
  );
export const makeShowsPointsOfInterestState =
  (): SelectorCreator => createSelector(
    [getShowsPointsOfInterest],
    (showsPointsOfInterest: boolean): boolean => showsPointsOfInterest
  );
export const makeShowsCompassState =
  (): SelectorCreator => createSelector(
    [getShowsCompass],
    (showsCompass: boolean): boolean => showsCompass
  );
export const makeShowsScaleState =
  (): SelectorCreator => createSelector(
    [getShowsScale],
    (showsScale: boolean): boolean => showsScale
  );
export const makeShowsBuildingsState =
  (): SelectorCreator => createSelector(
    [getShowsBuildings],
    (showsBuildings: boolean): boolean => showsBuildings
  );
export const makeShowsTrafficState =
  (): SelectorCreator => createSelector(
    [getShowsTraffic],
    (showsTraffic: boolean): boolean => showsTraffic
  );
export const makeShowsIndoorsState =
  (): SelectorCreator => createSelector(
    [getShowsIndoors],
    (showsIndoors: boolean): boolean => showsIndoors
  );
export const makeShowsIndoorLevelPickerState =
  (): SelectorCreator => createSelector(
    [getShowsIndoorLevelPicker],
    (showsIndoorLevelPicker: boolean): boolean => showsIndoorLevelPicker
  );
export const makeZoomEnabledState =
  (): SelectorCreator => createSelector(
    [getZoomEnabled],
    (zoomEnabled: boolean): boolean => zoomEnabled
  );
export const makeZoomControlEnabledState =
  (): SelectorCreator => createSelector(
    [getZoomControlEnabled],
    (zoomControlEnabled: boolean): boolean => zoomControlEnabled
  );
export const makeMinZoomLevelState =
  (): SelectorCreator => createSelector(
    [getMinZoomLevel],
    (minZoomLevel: boolean): boolean => minZoomLevel
  );
export const makeMaxZoomLevelState =
  (): SelectorCreator => createSelector(
    [getMaxZoomLevel],
    (maxZoomLevel: boolean): boolean => maxZoomLevel
  );
export const makeRotateEnabledState =
  (): SelectorCreator => createSelector(
    [getRotateEnabled],
    (rotateEnabled: boolean): boolean => rotateEnabled
  );
export const makeScrollEnabledState =
  (): SelectorCreator => createSelector(
    [getScrollEnabled],
    (scrollEnabled: boolean): boolean => scrollEnabled
  );
export const makePitchEnabledState =
  (): SelectorCreator => createSelector(
    [getPitchEnabled],
    (pitchEnabled: boolean): boolean => pitchEnabled
  );
export const makeToolbarEnabledState =
  (): SelectorCreator => createSelector(
    [getToolbarEnabled],
    (toolbarEnabled: boolean): boolean => toolbarEnabled
  );
export const makeCacheEnabledState =
  (): SelectorCreator => createSelector(
    [getCacheEnabled],
    (cacheEnabled: boolean): boolean => cacheEnabled
  );
export const makeLoadingEnabledState =
  (): SelectorCreator => createSelector(
    [getLoadingEnabled],
    (loadingEnabled: boolean): boolean => loadingEnabled
  );
export const makeLoadingIndicatorColorState =
  (): SelectorCreator => createSelector(
    [getLoadingIndicatorColor],
    (loadingIndicatorColor: string): string => loadingIndicatorColor
  );
export const makeLoadingBackgroundColorState =
  (): SelectorCreator => createSelector(
    [getLoadingBackgroundColor],
    (loadingBackgroundColor: string): string => loadingBackgroundColor
  );
export const makeMoveOnMarkerPressState =
  (): SelectorCreator => createSelector(
    [getMoveOnMarkerPress],
    (MoveOnMarkerPress: boolean): boolean => MoveOnMarkerPress
  );
export const makeLegalLabelInsetsState =
  (): SelectorCreator => createSelector(
    [getLegalLabelInsets],
    (legalLabelInsets: Object): Object => legalLabelInsets
  );
export const makeKmlSrcState =
  (): SelectorCreator => createSelector(
    [getKmlSrc],
    (kmlSrc: Object): Object => kmlSrc
  );

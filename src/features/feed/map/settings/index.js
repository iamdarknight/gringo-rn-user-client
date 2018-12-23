// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  changeLiteMode,
  changeMapType,
  changeShowsLocation,
  changeShowsRecentLocations,
  changeShowsTraffic,
  changeCachesMaps,
} from '../actions';
import {
  makeShowsUserLocationState,
  makeShowRecentLocationsState,
  makeShowsTrafficState,
  makeCacheEnabledState,
  makeLiteModeState,
  makeMapTypeState,
} from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getShowsUserLocationState = makeShowsUserLocationState();
  const getShowRecentLocationsState = makeShowRecentLocationsState();
  const getShowsTrafficState = makeShowsTrafficState();
  const getCacheEnabledState = makeCacheEnabledState();
  const getMapTypeState = makeMapTypeState();
  const getLiteModeState = makeLiteModeState();

  const mapStateToProps = (state: Object): Object => ({
    showsUserLocation: getShowsUserLocationState(state),
    showRecentLocations: getShowRecentLocationsState(state),
    showsTraffic: getShowsTrafficState(state),
    cachesMaps: getCacheEnabledState(state),
    mapType: getMapTypeState(state),
    liteMode: getLiteModeState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    changeLiteMode,
    changeMapType,
    changeShowsLocation,
    changeShowsRecentLocations,
    changeShowsTraffic,
    changeCachesMaps,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

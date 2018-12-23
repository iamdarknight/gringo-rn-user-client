// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  setSearching,
  setHideToolbar,
  setWeatherQuery,
} from '@gringo/feed/actions';
import { setMapRegion } from '@gringo/map/actions';
import { makeMapViewRegionState, makeSearchingState } from '@gringo/feed/selectors';
import { search, viewLocation } from './actions';

const makeMapStateToProps = (): Object => {
  const getMapViewRegion = makeMapViewRegionState();
  const getSearching = makeSearchingState();

  const mapStateToProps = (state: Object): Object => ({
    mapViewRegion: getMapViewRegion(state),
    searching: getSearching(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    setMapRegion,
    setSearching,
    setHideToolbar,
    setWeatherQuery,
    search,
    viewLocation,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

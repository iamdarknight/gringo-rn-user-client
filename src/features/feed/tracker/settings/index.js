// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  changeTrackerAccuracy,
  changeBackgroundTracking,
  changeBatterySaver,
  changeLocationHistory,
} from '../actions';
import {
  makeDesiredAccuracyState,
  makeStartOnBootState,
  makeStopOnTerminateState,
  makeRecentLocationsState,
} from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getDesiredAccuracyState = makeDesiredAccuracyState();
  const getStartOnBootState = makeStartOnBootState();
  const getStopOnTerminateState = makeStopOnTerminateState();
  const getLocationHistoryState = makeRecentLocationsState();

  const mapStateToProps = (state: Object): Object => ({
    trackerAccuracy: getDesiredAccuracyState(state),
    backgroundTracking: getStartOnBootState(state),
    batterySaver: getStopOnTerminateState(state),
    locationHistory: getLocationHistoryState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    changeTrackerAccuracy,
    changeBackgroundTracking,
    changeBatterySaver,
    changeLocationHistory,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

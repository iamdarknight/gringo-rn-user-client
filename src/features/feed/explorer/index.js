// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  makeLocationSetState,
  makeGpsSensorAccessState,
  makeGpsSensorStatusState,
} from '@gringo/tracker/selectors';

const makeMapStateToProps = (): Object => {
  const getLocationSet = makeLocationSetState();
  const getGpsSensorAccess = makeGpsSensorAccessState();
  const getGpsSensorStatus = makeGpsSensorStatusState();

  const mapStateToProps = (state: Object): Object => ({
    locationSet: getLocationSet(state),
    gpsSensorAccess: getGpsSensorAccess(state),
    gpsSensorStatus: getGpsSensorStatus(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

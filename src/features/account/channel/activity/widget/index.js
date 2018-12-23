// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from '../../actions';
import { makeBroadcastsState } from '../../selectors';
import type { Dispatch } from '../../types';


const makeMapStateToProps = (): Object => {
  const getBroadcastsState = makeBroadcastsState();

  const mapStateToProps = (state: Object): Object => ({
    broadcasts: getBroadcastsState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from '../../actions';
import { makeBroadcastersState } from '../../selectors';
import type { Dispatch } from '../../types';


const makeMapStateToProps = (): Object => {
  const getBroadcastersState = makeBroadcastersState();

  const mapStateToProps = (state: Object): Object => ({
    broadcasters: getBroadcastersState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

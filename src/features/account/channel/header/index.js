// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from '../actions';
import { makeAvatarState, makeBroadcastsState, makeSubscribersState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getAvatarState = makeAvatarState();
  const getBroadcastsState = makeBroadcastsState();
  const getSubscribersState = makeSubscribersState();

  const mapStateToProps = (state: Object): Object => ({
    avatar: getAvatarState(state),
    broadcasts: getBroadcastsState(state),
    subscribers: getSubscribersState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

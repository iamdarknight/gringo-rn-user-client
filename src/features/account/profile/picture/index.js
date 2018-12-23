// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { editAvatar } from '../actions';
import { makeAvatarState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getAvatarState = makeAvatarState();

  const mapStateToProps = (state: Object): Object => ({
    avatar: getAvatarState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    editAvatar,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

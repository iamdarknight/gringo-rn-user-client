// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './management/';
import { makeAboutState, makeAvatarState, makeNameState } from './profile/selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getNameState = makeNameState();
  const getAvatarState = makeAvatarState();
  const getAboutState = makeAboutState();

  const mapStateToProps = (state: Object): Object => ({
    userName: getNameState(state),
    userAvatar: getAvatarState(state),
    userAbout: getAboutState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

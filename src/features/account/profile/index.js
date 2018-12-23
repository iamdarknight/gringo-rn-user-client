// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from './actions';
import { makeNameState, makeAvatarState, makeAboutState, makeNumberState } from './selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getAvatarState = makeAvatarState();
  const getNameState = makeNameState();
  const getAboutState = makeAboutState();
  const getNumberState = makeNumberState();

  const mapStateToProps = (state: Object): Object => ({
    avatar: getAvatarState(state),
    name: getNameState(state),
    about: getAboutState(state),
    number: getNumberState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

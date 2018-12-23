// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeAvatarState } from '@gringo/profile/selectors';
import Component from './component';

const makeMapStateToProps = (): Object => {
  const getAvatarState = makeAvatarState();

  const mapStateToProps = (state: Object): Object => ({
    avatar: getAvatarState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

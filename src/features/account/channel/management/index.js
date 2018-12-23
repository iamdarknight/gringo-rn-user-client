// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { setBroadcasting, setPrivacy, editName } from '../actions';
import { makeBroadcastersState, makeBroadcastingState, makeNameState, makePrivacyState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getBroadcastersState = makeBroadcastersState();
  const getBroadcastingState = makeBroadcastingState();
  const getNameState = makeNameState();
  const getPrivacyState = makePrivacyState();

  const mapStateToProps = (state: Object): Object => ({
    broadcasters: getBroadcastersState(state),
    broadcasting: getBroadcastingState(state),
    name: getNameState(state),
    privacy: getPrivacyState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    setBroadcasting,
    setPrivacy,
    editName,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

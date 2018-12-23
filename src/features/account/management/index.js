// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { makeNameState } from './selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getNameState = makeNameState();

  const mapStateToProps = (state: Object): Object => ({
    channelName: getNameState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

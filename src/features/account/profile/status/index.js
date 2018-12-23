// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { editAbout } from '../actions';
import { makeAboutState, makeAboutHistoryState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getAboutHistoryState = makeAboutHistoryState();
  const getAboutState = makeAboutState();

  const mapStateToProps = (state: Object): Object => ({
    about: getAboutState(state),
    history: getAboutHistoryState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    editAbout,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

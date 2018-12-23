// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { editName } from '../actions';
import { makeNameState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getNameState = makeNameState();

  const mapStateToProps = (state: Object): Object => ({
    name: getNameState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    editName,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

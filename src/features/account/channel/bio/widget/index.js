// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from '../../actions';
import { makeBioState } from '../../selectors';
import type { Dispatch } from '../../types';


const makeMapStateToProps = (): Object => {
  const getBioState = makeBioState();

  const mapStateToProps = (state: Object): Object => ({
    bio: getBioState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

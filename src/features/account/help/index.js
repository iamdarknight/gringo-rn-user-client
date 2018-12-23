// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from './actions';
import * as Selector from './selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getDayLightSavingTimeState = Selector.makeDayLightSavingTimeState();

  const mapStateToProps = (state: Object): Object => ({
    dst: getDayLightSavingTimeState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

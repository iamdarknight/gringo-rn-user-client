// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from './actions';
import { makeBillingDetailsState } from './selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getBillingDetailsState = makeBillingDetailsState();

  const mapStateToProps = (state: Object): Object => ({
    billingDetails: getBillingDetailsState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

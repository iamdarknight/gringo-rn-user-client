// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from '../actions';
import { makeBillingPaymentGatewaysState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getBillingPaymentGatewaysState = makeBillingPaymentGatewaysState();

  const mapStateToProps = (state: Object): Object => ({
    billingPaymentGateways: getBillingPaymentGatewaysState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

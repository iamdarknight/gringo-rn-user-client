// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { editAddress } from '../actions';
import { makeBillingAddressState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getBillingAddressState = makeBillingAddressState();

  const mapStateToProps = (state: Object): Object => ({
    billingAddress: getBillingAddressState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    editAddress,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

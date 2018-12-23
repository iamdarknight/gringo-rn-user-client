// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {  } from '../actions';
import { makeBillingTelephoneState } from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getBillingTelephoneState = makeBillingTelephoneState();

  const mapStateToProps = (state: Object): Object => ({
    billingTelephone: getBillingTelephoneState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

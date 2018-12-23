// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from './actions';
import { makeSocialAccountsState } from './selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getSocialAccountsState = makeSocialAccountsState();

  const mapStateToProps = (state: Object): Object => ({
    accounts: getSocialAccountsState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

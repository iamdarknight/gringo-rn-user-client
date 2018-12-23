// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import { } from './actions';
import { makeBackupAccountsState } from './selectors';
import type { Dispatch } from './types';


const makeMapStateToProps = (): Object => {
  const getBackupAccountsState = makeBackupAccountsState();

  const mapStateToProps = (state: Object): Object => ({
    accounts: getBackupAccountsState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

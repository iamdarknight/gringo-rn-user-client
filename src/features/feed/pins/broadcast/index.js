// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';

const makeMapStateToProps = (): Object => {
  const mapStateToProps = (state: Object): Object => ({
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

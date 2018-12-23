// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  makeTextSearchResponseState,
} from '@gringo/search/selectors';

const makeMapStateToProps = (): Object => {
  const getTextSearchResponse = makeTextSearchResponseState();

  const mapStateToProps = (state: Object): Object => ({
    textSearchResponse: getTextSearchResponse(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

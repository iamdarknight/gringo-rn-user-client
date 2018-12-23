// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  makeTextSearchResponseState,
} from '@gringo/search/selectors';
import Component from './component';

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

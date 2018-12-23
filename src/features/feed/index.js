// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  makeSearchingState,
  makeWeatherQueryState,
  makeHideToolbarState,
  makeShowDirectMessagesState,
} from './selectors';
import {
  setSearching,
  setHideToolbar,
  setWeatherQuery,
  setShowDirectMessages,
} from './actions';

const makeMapStateToProps = (): Object => {
  const getSearching = makeSearchingState();
  const getWeatherQuery = makeWeatherQueryState();
  const getShowDirectMessages = makeShowDirectMessagesState();
  const getHideToolbar = makeHideToolbarState();

  const mapStateToProps = (state: Object): Object => ({
    searching: getSearching(state),
    weatherQuery: getWeatherQuery(state),
    showDirectMessages: getShowDirectMessages(state),
    hideToolbar: getHideToolbar(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    setSearching,
    setHideToolbar,
    setWeatherQuery,
    setShowDirectMessages,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

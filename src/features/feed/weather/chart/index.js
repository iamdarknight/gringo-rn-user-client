// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import {
  makeCurrentWeatherIconState,
  makeCurrentPlaceNameState,
  makeFiveDayWeatherForecastState,
} from '../selectors';
import {
} from '../actions';

const makeMapStateToProps = (): Object => {
  const getCurrentWeatherIcon = makeCurrentWeatherIconState();
  const getCurrentPlaceName = makeCurrentPlaceNameState();
  const getFiveDayWeatherForecast = makeFiveDayWeatherForecastState();

  const mapStateToProps = (state: Object): Object => ({
    currentWeatherIcon: getCurrentWeatherIcon(state),
    currentPlaceName: getCurrentPlaceName(state),
    fiveDayWeatherForecast: getFiveDayWeatherForecast(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

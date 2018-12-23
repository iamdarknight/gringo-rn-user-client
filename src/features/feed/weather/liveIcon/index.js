// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeMapViewRegionState } from '@gringo/feed/selectors';
import Component from './component';
import {
  makeCurrentWeatherIconState,
  makeCurrentWeatherState,
} from '../selectors';
import type { Dispatch } from '../types';


const makeMapStateToProps = (): Object => {
  const getCurrentWeather = makeCurrentWeatherState();
  const getCurrentWeatherIcon = makeCurrentWeatherIconState();

  const mapStateToProps = (state: Object): Object => ({
    currentWeather: getCurrentWeather(state),
    currentWeatherIcon: getCurrentWeatherIcon(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch:Dispatch): Object => (
  bindActionCreators({
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);

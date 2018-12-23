// @flow
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import { withTheme, Text } from 'react-native-paper';
import type { Props } from '../types';
import Icon from '@gringo/weather/icons';
import Styles from '../styles';

class Weather extends PureComponent<Props> {


  weatherIcon = (): string => {
    const date = moment().unix();

    const {
      sunrise,
      sunset,
    } = this.props.dst;

    const { id } = this.props;

    /* Get suitable icon for weather */
    if (date >= sunrise && date < sunset) {
      return `owm-day-${id}`;
    } else if (date > sunset) {
      return `owm-night-${id}`;
    } else {
      return `owm-${id}`;
    }
  };

  render() {
    const { colors } = this.props.theme;

    return (

      <View style={Styles.container}>

        <View style={[Styles.bar,{ paddingLeft: 10 }]}>
          {/* Render weather widget */}
          <Icon
            name={this.props.currentWeatherIcon}
            size={20}
            color={colors.primary}
            style={Styles.icon}
          />
        </View>

        <View style={[Styles.bar,{ paddingRight: 5, paddingLeft: 3 }]}>
          <Text
            style={Styles.text}
          >
            {this.props.currentWeather}
          </Text>
        </View>

      </View>

    );
  }
}

export default withTheme(Weather);

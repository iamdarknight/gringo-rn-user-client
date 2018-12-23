// @flow
import * as React from 'react';
import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Text, Surface, withTheme,  Title } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import moment from 'moment';
import { material, robotoWeights } from 'react-native-typography';
import View from '@gringo/components/view/';
import Icon from '@gringo/weather/icons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../styles';
const { width, height } = Dimensions.get('window');
class WeatherChart extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  isDayNight = (time) => {
    if ( moment('600', 'hmm').hour() > moment.unix(time).hour() || moment.unix(time).hour() > moment('1800', 'HHmm').hour()) {
      return 'night';
    }
    return 'day';
  }

  render(): React.Element<*> {
    const { colors } = this.props.theme;
    return (
      <Animatable.View
        animation="fadeIn"
        easing="ease-in-out"
        direction="alternate"
        duration={200}
        useNativeDriver
        style={[Styles.weatherBar, { padding: 10 }]}
      >
        <Surface style={{ elevation: 3, borderRadius: 5 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: colors.primary,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              paddingHorizontal: 15,
              paddingVertical: 5,
            }}
          >
            <Title style={[material.title, robotoWeights.bold, { color: colors.surface }]} >{this.props.currentPlaceName}</Title>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
              <Text
                style={[material.body2, robotoWeights.condensedBold, {
                  marginRight: 5,
                  marginTop: 4,
                  color: colors.surface,
                }]}
              >NOW
              </Text>
              <Icon name={this.props.currentWeatherIcon} size={25} color={colors.surface} />
            </View>
          </View>
          <ScrollView
            style={{ height: height/2.5, padding: 5 }}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical
            bounces
            bouncesZoom
            centerContent
          >
            { this.props.fiveDayWeatherForecast.map((day, index) => (
              <View  key={day.dt}>
              <Animatable.View
                animation="fadeIn"
                ease="ease-in-out"
                delay={100 * index}
                duration={1500}
                useNativeDriver
                style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: colors.surface,
              }}
              >
                <View style={{ width: 80 }}>
                  <Text style={[material.body1, robotoWeights.light, { color: colors.primary }]} >{moment.unix(day.dt).format('ddd, hA')}</Text>
                </View>
                <View style={{ width: 40 }}>
                  <Icon name={`owm-${this.isDayNight(day.dt)}-${day.weather[0].id}`} size={20} color={colors.primary} />
                </View>
                <View style={{ width: 80 }}>
                  <Text style={[material.body1, robotoWeights.light, { color: colors.primary }]} >{day.weather[0].description}</Text>
                </View>
                <View>
                  <Text style={[material.body1, robotoWeights.light, { color: colors.primary }]} >{`${day.main.temp_min}/${day.main.temp_max}`}</Text>
                </View>
              </Animatable.View>
            </View>
          ))}
            <View style={{ paddingVertical: 5, alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: colors.surface, borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}>
              <MIcon name="more-horiz" size={20} color={colors.primary} />
            </View>
          </ScrollView>
        </Surface>
      </Animatable.View>
    );
  }
}


export default withTheme(WeatherChart);


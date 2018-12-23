// @flow
import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { withNavigation } from 'react-navigation';
import IconBadge from 'react-native-icon-badge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import View from '@gringo/components/view/';
import WeatherIcon from '@gringo/weather/liveIcon';
import Styles from './styles';

class StatusBar extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLogoPress = (): void => this.props.navigation.navigate('BROADCAST')

  onSearchPress = () => this.props.setSearching(true)

  onWeatherPress = () => this.props.setWeatherQuery(true)

  onMessagePress = () => this.props.setShowDirectMessages(true)

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={Styles.container}>
        <Animatable.View
          animation="fadeIn"
          delay={0}
          useNativeDriver
          style={Styles.logoWrapper}
        >
          <TouchableOpacity onPress={this.onLogoPress} style={Styles.logoWrapper} >
            <Image
              style={Styles.logoImage}
              source={require('@gringo/src_assets/img/logo/0.75x/logo.png')}
            />
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          delay={100}
          useNativeDriver
          style={Styles.searchButtonWrapper}
        >
          <TouchableOpacity
            onPress={this.onSearchPress}
            style={Styles.searchButton}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon name="search" size={20} color={colors.primary} />
              <Text style={Styles.searchButtonText}>Gringo Search</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          delay={200}
          useNativeDriver
          style={Styles.weatherIconWrapper}
        >
          <TouchableOpacity
            onPress={this.onWeatherPress}
          >
            <View>
              {/* Render the live weather icon */}
              <WeatherIcon />
            </View>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeIn" delay={300} useNativeDriver style={Styles.messagingButtonWrapper}>
          <TouchableOpacity onPress={this.onMessagePress}>
            <IconBadge
              MainElement={
                <View
                  style={Styles.messagingButton}
                >
                  <Icon name="mail-outline" size={25} color={colors.primary} />
                </View>
                    }
              BadgeElement={
                <Icon name="place" size={10} color={colors.primary} style={Styles.messagingButtonBadgeText} />
                    }
              IconBadgeStyle={Styles.messagingButtonBadge}
              Hidden={this.state.BadgeCount === 0}
            />
          </TouchableOpacity>
        </Animatable.View>


      </View>
    );
  }
}

export default withNavigation(withTheme(StatusBar));


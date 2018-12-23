import React, { PureComponent } from 'react';
import { withTheme, FAB } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import Styles from './styles';

class Explorer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setCurrentLocation = () => {
    const options = {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 2000,
    };
    const onLocation = (location) => {
      this.props.onLongPress(location);
    };
    const onError = (error) => {
      console.log(error);
    };
    BackgroundGeolocation.getCurrentLocation(onLocation, onError, options);
  }

  render() {
    const { colors } = this.props.theme;

    return (
      <TouchableWithoutFeedback
        onLongPress={this.setCurrentLocation}
        onPress={this.props.onPress}
      >
        <FAB
          style={Styles.fab}
          color={colors.primary}
          icon={
            this.props.gpsSensorAccess !== 1 || this.props.gpsSensorStatus === false ? 'gps-off' :
              this.props.gpsSensorAccess === 1 && this.props.locationSet === false ? 'gps-not-fixed' :
                this.props.gpsSensorAccess === 1 && this.props.locationSet === true ? 'gps-fixed' : 'gps-off'
          }
        />
      </TouchableWithoutFeedback>
    );
  }
}
export default withTheme(Explorer);

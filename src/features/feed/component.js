// @flow
import * as React from 'react';
import { SafeAreaView, StatusBar, BackHandler } from 'react-native';
import { withTheme } from 'react-native-paper';
import Map from '@gringo/map';
import Tracker from '@gringo/tracker';
import View from '@gringo/components/view/';
import WeatherChart from '@gringo/weather/chart';
import GringoBar from '@gringo/statusBar';
import Menu from '@gringo/fab/';
import SearchBar from '@gringo/search';
import Styles from './styles';


class Feed extends React.PureComponent<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.props.searching)  { this.props.setSearching(false); }
      else if (this.props.weatherQuery) { this.props.setWeatherQuery(false); }
      else if (this.props.showDirectMessages) { this.props.setShowDirectMessages(false); }
      else {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }


  mapPress = () => {
    // if (this.props.searching)  { this.props.setSearching(false); }
    // else if (this.props.weatherQuery) { this.props.setWeatherQuery(false); }
    // else if (this.props.showDirectMessages) { this.props.setShowDirectMessages(false); }
    // else {
    //   this.props.setHideToolbar(!this.props.hideToolbar);
    //  }
    this.props.setHideToolbar(!this.props.hideToolbar);
  }

  render(): React.Element<*> {
    const { colors } = this.props.theme;

    return (
      <SafeAreaView style={Styles.container}>

        <StatusBar backgroundColor={colors.primary} animated />

        {/* Gringo Map Feed */}
        <Map onMapPress={this.mapPress} ref="map" />

        <View>
          {/* Gringo Search Bar */}
          <View hide={!this.props.searching} >
            <SearchBar />
          </View>

          {/* Gringo WeatherChart */}
          <View hide={!this.props.weatherQuery}>
            <WeatherChart />
          </View>

          {/* Gringo Status Bar */}
          <View hide={this.props.weatherQuery || this.props.searching || this.props.hideToolbar}>
            <GringoBar />
          </View>
        </View>

        {/* Gringo Tool Bar */}
        <View style={Styles.toolBar} hide={this.props.searching}>


          {/* Gringo Menu */}
          <Menu />

          <Tracker />

        </View>

      </SafeAreaView>
    );
  }
}

export default withTheme(Feed);


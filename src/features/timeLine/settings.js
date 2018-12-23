import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class FlagContainer extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Highlights',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
      // this variable determines the app showing in the flag fab modal.
      // It is mutated by the pop over menu options
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    return (
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          translucent={false}
          animated
        />


      </SafeAreaView>

    );
  }
}

export default withTheme(FlagContainer);


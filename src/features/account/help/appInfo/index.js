import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { withTheme } from 'react-native-paper';
import styles from '../styles';

class Splash extends Component {
  static navigationOptions = {
    header: null,
    title: 'Splash',
  };

  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    if (this.props.loading) {
      return this.setState({ loading: true });
    } else {
      // do stuff while splash screen is shown
     
    }
  }

  componentWillUnmount() {
  }


  render() {
    const { colors } = this.props.theme;
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.primary }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          translucent={false}
          animated
        />

        <View>

          <Image
            style={styles.logo}
            source={require('@gringo/src_assets/img/logo/0.75x/logo.png')}
          />

        </View>

        <View>
          <ActivityIndicator size="large" color={colors.accent} animating={this.state.loading} />
        </View>

      </SafeAreaView>
    );
  }
}
export default withTheme(Splash);

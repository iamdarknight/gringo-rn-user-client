import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import firebase from 'react-native-firebase';
import { withTheme } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';

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
      this.authCheck();
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
    }
  }

  componentWillUnmount() {
  }

  authCheck = () => {
    this.setState({ loading: true });
    firebase.auth().onAuthStateChanged((user) => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(user ? 'Auth' : 'App');
    });
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          translucent={false}
          animated
        />

        <View>

          <Image
            style={styles.logo}
            source={require('@gringo/src_assets/img/logo/4x/logo.png')}
          />

        </View>

        <View>
          <ActivityIndicator size="large" color={colors.primary} animating={this.state.loading} />
        </View>

      </SafeAreaView>
    );
  }
}
export default withTheme(Splash);

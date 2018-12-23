import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import firebase from 'react-native-firebase';
import {
  TextInput,
  FAB,
  Surface,
  Title,
  Paragraph,
  withTheme,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackActions, NavigationActions } from 'react-navigation';
import ProfileSetup from '@gringo/account/profile/setup';
import Styles from './styles';

class Auth extends Component {
  static navigationOptions = {
    title: 'Gringo Login',
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+263',
      confirmResult: null,
      infoCardIcon: 'announcement',
      infoIconColor: 'white',
      logInDisabled: false,
      verifyInputDisabled: false,
    };
  }
  componentDidMount() {
    const { phoneNumber } = this.state;
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          message: 'Your code has been verified. Please give us a moment to set you up...',
          infoCardIcon: 'done',
          infoIconColor: 'white',
        });

        this.onTokenRefreshListener = firebase.messaging().onTokenRefresh((fcmToken) => {
          // Process your token as required
        });

        firebase.messaging().hasPermission()
          .then((enabled) => {
            if (enabled) {
              // user has permissions
              // gets the device's push token
              firebase.messaging().getToken().then((token) => {
                // stores the token in the user's document
                firebase.firestore().collection('users').doc(user.uid).set({
                  pushToken: token,
                  phoneNumber,
                });
              });
            } else {
              // user doesn't have permission
              firebase.messaging().requestPermission()
                .then(() => {
                  // User has authorised
                  // gets the device's push token
                  firebase.messaging().getToken().then((token) => {
                    // stores the token in the user's document
                    firebase.firestore().collection('users').doc(user.uid).set({
                      pushToken: token,
                      phoneNumber,
                    });
                  });
                })
                .catch((error) => {
                  // User has rejected permissions
                });
            }
          });

        this.setState({
          message: 'You are all set to explore...',
        });

        this.setState({
          user: user.toJSON(),
        });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: this.state.phoneNumber,
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    this.onTokenRefreshListener();
  }

  signIn = () => {
    const {
      phoneNumber,
    } = this.state;

    const { colors } = this.props.theme;
    this.setState({
      message: 'Gringo is now attempting to verify your identity. Please note this action requires an internet connection. This will take a moment.',
      logInDisabled: true,
      infoIconColor: 'white',
    });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then((confirmResult) => {
        this.setState({
          confirmResult,
          message: 'A code has been sent to your phone. If nothing happens in the next few seconds, open the SMS you recieved and enter the code',
          logInDisabled: false,
          infoIconColor: 'white',
        });
      })
      .catch((error) => { this.setState({
        message: `Ooops!! ${error.message}`,
        logInDisabled: false,
        infoIconColor: colors.error,
      }); });
  };

  confirmCode = () => {
    const {
      codeInput,
      confirmResult,
    } = this.state;
    const { colors } = this.props.theme;
    this.setState({
      message: 'Gringo is now verifying your security code. Please be patient.',
      verifyInputDisabled: true,
      infoIconColor: 'white',
    });
    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          // User authenticated: Navigation to New Account setup started
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'PROFILE_SETUP' }),
            ],
          });

          this.props.navigation.dispatch(resetAction);
        })
        .catch((error) => {
          this.setState({
            message: `Ooops!! ${error.message}`,
            verifyInputDisabled: false,
            infoIconColor: colors.error,
          });
        });
    }
  };

  phoneNumberInput = (phoneNumber) => {
    this.setState({ phoneNumber });
  }

  renderPhoneNumberInput(): React.Element<*> {
    const {
      phoneNumber,
      logInDisabled,
    } = this.state;
    const { colors } = this.props.theme;
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.inputLabel}>Mobile Number</Text>
        <Animatable.View
          animation="pulse"
          easing="ease-in-out"
          direction="alternate"
          duration={700}
          style={Styles.inputWrapper}
          useNativeDriver
        >
          <Surface style={Styles.inputSurface}>
            <TextInput
              autoFocus
              style={Styles.input}
              onChangeText={value => this.phoneNumberInput(value)}
              underlineColor={colors.primary}
              value={phoneNumber}
              keyboardType="phone-pad"
              disabled={logInDisabled}
              theme={{
                fonts: {
                  regular: 'Open Sans',
                },
                colors: {
                  text: colors.primary,
                },
              }}
            />
            <FAB
              icon="lock-open"
              color={colors.primary}
              style={Styles.inputButton}
              onPress={this.signIn}
              label="LOG IN"
            />
          </Surface>
        </Animatable.View>
      </SafeAreaView>
    );
  }

  renderMessage(): React.Element<*> {
    const {
      message,
    } = this.state;
    const myIcon = (
      <View style={Styles.messageWrapper} >
        <Animatable.View
          animation="pulse"
          easing="ease"
          iterationCount={20}
          duration={1500}
          useNativeDriver
        >
          <Icon
            name={this.state.infoCardIcon}
            size={20}
            color={this.state.infoIconColor}
          />

        </Animatable.View>
      </View>);
    if (!message.length) return null;

    return (
      <Animatable.View
        animation="fadeIn"
        easing="ease"
        duration={1500}
        useNativeDriver
      >
        <Surface style={Styles.messageSurface} >
          <View style={Styles.messageIcon} >
            {myIcon}
            <Title>Information</Title>
          </View>
          <Paragraph style={Styles.message} >
            {message}
          </Paragraph>
        </Surface>
      </Animatable.View>
    );
  }

  renderVerificationCodeInput(): React.Element<*> {
    const {
      codeInput,
      verifyInputDisabled,
    } = this.state;
    const { colors } = this.props.theme;
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.inputLabel}>Verification Code</Text>
        <Animatable.View
          animation="pulse"
          easing="ease-in-out"
          direction="alternate"
          duration={700}
          style={Styles.inputWrapper}
          useNativeDriver
        >
          <Surface style={Styles.inputSurface} >
            <TextInput
              autoFocus
              style={Styles.input}
              onChangeText={value => this.setState({ codeInput: value })}
              placeholder="123456"
              underlineColor={colors.primary}
              value={codeInput}
              keyboardType="phone-pad"
              disabled={verifyInputDisabled}
              theme={{
                fonts: {
                  regular: 'Open Sans',
                },
                colors: {
                  text: colors.primary,
                },
              }}
            />
            <FAB
              icon="verified-user"
              color={colors.primary}
              style={Styles.inputButton}
              onPress={this.confirmCode}
              label="VERIFY"
            />
          </Surface>
        </Animatable.View>
      </SafeAreaView>
    );
  }


  render(): React.Element<*> {
    const { user, confirmResult } = this.state;
    const { colors } = this.props.theme;
    return (
      <View style={Styles.containerWrapper}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          animated
          translucent={false}
        />
        {user && <ProfileSetup />}

        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {this.renderMessage()}
      </View>
    );
  }
}
export default withTheme(Auth);

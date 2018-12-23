// @flow

import { createStackNavigator } from 'react-navigation';
import Authentication from '@gringo/auth/';

import Theme from '@gringo/styles/global';

import * as screenNames from './screens';

const { colors } = Theme;

const AuthNavigator = createStackNavigator(
  {
    [screenNames.AUTH]: {
      screen: Authentication,
    },
  },
  {
    initialRouteName: screenNames.AUTH,
    navigationOptions: {
      title: 'Gringo',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.background,
      headerTitleStyle: {
        fontWeight: '100',
      },
    },
  }
);


export default AuthNavigator;

import Splash from '@gringo/splash';
import { createSwitchNavigator } from 'react-navigation';
import MainNavigator from './mainNavigator';
import AuthNavigator from './authNavigator';

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: Splash,
    App: MainNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default AppNavigator;

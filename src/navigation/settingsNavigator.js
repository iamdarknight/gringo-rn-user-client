import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MapSettings from '@gringo/feed/map/settings';
import TrackerSettings from '@gringo/feed/tracker/settings';
import Account from '@gringo/account';
import Menu from '@gringo/navigation/settingsMenu';
import Theme from '@gringo/styles/global';
import * as screenNames from './screens';

const { colors } = Theme;

const settingsNavigator = createMaterialTopTabNavigator({
  [screenNames.ACCOUNT]: {
    screen: Account,
  },
  [screenNames.MAP_SETTINGS]: {
    screen: MapSettings,
  },
  [screenNames.TRACKER_SETTINGS]: {
    screen: TrackerSettings,
  },
},{
  initialRouteName: screenNames.ACCOUNT,
  swipeEnabled: true,
  animationEnabled: true,
  lazy: false,
  optimizationsEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.accent,
    inactiveTintColor: colors.background,
    style: {
      backgroundColor: colors.primary,
    },
    indicatorStyle: {
      backgroundColor: colors.accent,
    },
    showIcon: false,
    showLabel: true,
    upperCaseLabel: true,
    pressColor: colors.accent,
    pressOpacity: 0.1,
    scrollEnabled: false,
    tabStyle: {},
    labelStyle: {},
    iconStyle: {},
    allowFontScaling: true,
    shifting: true,
  },
});
settingsNavigator.navigationOptions = ({ navigation, screenProps }): Object => ({
  title: 'Settings',
  headerStyle: {
    backgroundColor: colors.accent,
  },
  headerRight:
      (
        <Menu />
      ),
  headerTintColor:  colors.primary,
});

export default settingsNavigator;

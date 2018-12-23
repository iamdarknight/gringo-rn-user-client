// @flow
import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import color from 'color';
import {
  black,
  white,
} from '@gringo/styles/colors';
import fonts from '@gringo/styles/fonts';


const Theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 3,
  fonts,
  colors: {
    ...DefaultTheme.colors,
    primary: '#691898',
    accent: white,
    background: 'rgba(169, 149, 188, 0.8)',
    surface: white,
    error: '#FFBC33',
    text: black,
    disabled: color('#FFBC33')
      .alpha(0.3)
      .rgb()
      .string(),
    placeholder: color('#691898')
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
  },
};

export default Theme;

export const Styles = StyleSheet.create({
  flatListWrapper: {
    backgroundColor: Theme.colors.surface,
    flex: 1,
  },
  flatListItemContainer: {
    borderBottomWidth: 0,
  },
  flatListItemTitle: {
    marginLeft: 15,
  },
  flatListItemSubTitle: {
    fontSize: 13,
    marginLeft: 15,
  },
  headerRightText: {
    marginRight: 10,
  },
});

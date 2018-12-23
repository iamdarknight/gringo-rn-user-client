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
  roundness: 5,
  fonts,
  colors: {
    ...DefaultTheme.colors,
    primary: '#691A99',
    accent: 'white',
    background: '#E1BEE8',
    surface: white,
    error: '#FFBC33',
    text: black,
    disabled: color('#FFBC33')
      .alpha(0.3)
      .rgb()
      .string(),
    placeholder: color('#691A99')
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
  },
};
const { colors } = Theme;
export default StyleSheet.create({
  container: {
    padding: 10,
  },
  containerWrapper: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  inputLabel: {
    fontWeight: '600',
    color: colors.primary,
    padding: 3,
  },
  inputWrapper: {
    padding: 3,
  },
  input: {
    height: 40,
    marginBottom: 0,
    backgroundColor: colors.background,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  inputSurface: {
    elevation: 4,
    marginTop: 10,
    borderRadius: 5,
  },
  inputButton: {
    marginTop: 0,
    elevation: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: colors.primary,
    borderWidth: 0,
    borderTopWidth: 0,
  },
  messageWrapper: {
    backgroundColor: colors.primary,
    elevation: 2,
    borderRadius: 25,
    padding: 5,
    margin: 4,
  },
  messageSurface: {
    margin: 15,
    elevation: 4,
    borderRadius: 5,
    padding: 10,
  },
  messageIcon: {
    flexDirection:'row',
    alignItems: 'center',
  },
  message: {
    marginLeft: 37,
    marginRight: 15,
  },
});

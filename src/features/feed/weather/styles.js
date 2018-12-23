// @flow
import { StyleSheet } from 'react-native';

import Theme from '@gringo/styles/global';

const { colors } = Theme;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    borderRadius: 50,
    height: 40,
    backgroundColor: colors.background,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  weatherBar: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    elevation: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5,
    paddingBottom: 10,
  },
  text: {
    fontSize: 8,
    width: 35,
    marginRight: 3,
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '100',
  },
  icon: {
    color: colors.primary,
  },
});

export default styles;

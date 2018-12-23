// @flow
import { StyleSheet } from 'react-native';
import Theme from '@gringo/styles/global';

const { colors } = Theme;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    margin: 0,
    backgroundColor: colors.background,
  },
  scrollList: {
    flex: 3,
    backgroundColor: colors.surface,
    elevation: 3,
    marginHorizontal: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default styles;

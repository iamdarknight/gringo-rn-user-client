// @flow
import { StyleSheet } from 'react-native';
import Theme from '@gringo/styles/global';

const { colors } = Theme;


const styles = StyleSheet.create({
  container: {
    flex: 2,
    margin: 0,
    backgroundColor: colors.surface,
  },
  scrollList: {
    flex: 3,
    backgroundColor: colors.surface,
  },
});

export default styles;

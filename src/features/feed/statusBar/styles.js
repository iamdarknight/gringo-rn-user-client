// @flow
import { StyleSheet } from 'react-native';
import Theme from '@gringo/styles/global';

const { colors } = Theme;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    marginTop: 5,
  },
  logoWrapper: {
    backgroundColor: colors.primary,
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  logoImage: {
    height: 15,
    width: 27,
  },
  searchButtonWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 50,
    elevation: 0,
    width:140,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width:140,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: colors.primary,
    fontWeight: '600',
  },
  weatherIconWrapper: {
    flexDirection: 'row',
    borderRadius: 25,
    height: 40,
    backgroundColor: colors.background,
    elevation: 0,
  },
  messagingButtonWrapper: {
    width:45,
    height:80,
  },
  messagingButton: {
    backgroundColor: colors.background,
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  messagingButtonBadgeText: {
    color: colors.primary,
  },
  messagingButtonBadge: {
    backgroundColor: colors.error,
  },
});

export default styles;

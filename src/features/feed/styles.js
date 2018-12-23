// @flow
import { StyleSheet, Dimensions } from 'react-native';

import Theme from '@gringo/styles/global';

const { colors } = Theme;

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75,
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    elevation: 5,
    paddingVertical: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  searchToolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    elevation: 5,
    borderTopColor: colors.primary,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  toolBar: {
    marginHorizontal: 16,
    marginBottom: 26,
  },
  logo: {
    marginTop: 3,
    height: 13,
    width: 24,
  },
});

export default styles;

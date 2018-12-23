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
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: Screen.height + 300,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    margin: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#459FED',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: Screen.width,
    height: 225,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  map: {
    height: Screen.height,
    width: Screen.width,
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

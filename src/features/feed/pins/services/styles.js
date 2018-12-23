// @flow
import { StyleSheet, Dimensions } from 'react-native';

import Theme from '@gringo/styles/global';

const { colors } = Theme;
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const styles = StyleSheet.create({
  rowAvatar: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  rowAvatarContainer: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  rowAvatarContainerOverlay: {
    borderRadius: 5,
    borderWidth: 0,
  },
  rowContainer: {
    borderBottomWidth: 0,
    backgroundColor: colors.accent,
  },
  rowSubtitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingRight: 20,
  },
  rowSubtitleText: {
    color: colors.primary,
    backgroundColor: colors.accent,
    borderRadius: 15,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  rowBadgeText: {
    color: colors.primary,
  },
  rowBadgeContainer: {
    marginTop: -20,
    backgroundColor: colors.background,
  },
  calloutContainer: {
    width: 240,
    height: 240,
  },
  calloutHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  calloutHeaderImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  calloutHeaderTitle: {
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 2,
  },
  calloutHeaderTime: {
    color: colors.backdrop,
    fontSize: 12,
  },
  calloutBodyContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  calloutBodyImage: {
    width: 260,
    height: 170,
  },
  calloutFooterContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  calloutFooterTextContainer: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calloutFooterLinkIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    width: Screen.width,
    backgroundColor: colors.surface,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 3,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  panelHeaderLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  panelHeaderLogo: {
    width: 70,
    height: 70,
    borderRadius: 3,
    marginRight: 5,
  },
  panelHeaderInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  panelCloseButton: {
    padding: 5,
    backgroundColor: colors.surface,
    borderRadius: 25,
  },
  panelList: {
    marginVertical: 10,
    backgroundColor: colors.surface,
    height: Screen.height - 210,
  },
  panelFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingTop: 10,
    paddingLeft: 30,
    backgroundColor: colors.surface,
    height: 40,
  },
});

export default styles;

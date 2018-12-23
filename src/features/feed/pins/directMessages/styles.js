// @flow
import { StyleSheet, Dimensions } from 'react-native';

import Theme from '@gringo/styles/global';

const { colors } = Theme;
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75,
};
const styles = StyleSheet.create({
  rowContainer: {
    borderBottomWidth: 0,
    paddingVertical: 8,
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
  interactableCloseButton: {
    position:'absolute',
    padding: 5,
    top: 5,
    backgroundColor: colors.backdrop,
    borderRadius: 25,
    right: 5,
  },
  interactableMainContainer: {
    flex: 5,
    width: Screen.width - 60,
  },
  interactableHeader: {
    flexDirection: 'row',
  },
  interactableHeaderAvatarContainer: { flex: 1 },
  interactableHeaderAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    margin: 10,
  },
  interactableHeaderInfoContainer: {
    padding: 2,
    width: Screen.width - 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  interactableMessage: {
    padding: 2,
    width: Screen.width - 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactableActions: {
    width: Screen.width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interactableLink: {
    padding: 8,
  },
  interactableLikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  interactableLikeAnimation: {
    width: 50,
  },
  interactableMenu: {
    marginVertical: 0,
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 3,
    shadowOpacity: 0.4,
  },
});

export default styles;

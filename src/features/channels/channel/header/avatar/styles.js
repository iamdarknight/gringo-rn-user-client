// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 5,
  },
  avatarWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 5,
  },
  updateAvatarButton: {
    position:'absolute',
    padding: 5,
    // backgroundColor: '#691A99',
    borderTopLeftRadius: 5,
  },
});

export default styles;

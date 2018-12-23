// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: 'transparent',
  },
  avatarWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  avatar: {
    width: 110,
    height: 110,
    backgroundColor: 'transparent',
  },
  updateAvatarButton: {
    position:'absolute',
    padding: 5,
    // backgroundColor: '#691A99',
  },
});

export default styles;

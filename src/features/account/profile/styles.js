// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    color: '#691A99',
    paddingTop: 10,
    paddingLeft: 20,
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
  avatarContainer: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent:'center',
    elevation: 3,
  },
  avatarWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  updateAvatarButton: {
    position:'absolute',
    padding: 5,
    backgroundColor: '#691A99',
    borderRadius: 15,
  },
  usernameContainer: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'space-between',
    elevation: 3,
    margin: 10,
  },
  username: {
    fontSize: 19,
    margin: 5,
    padding: 5,
  },
  editUsername: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 50,
    padding: 5,
  },
  details: {
    margin: 10,
    marginTop: 15,
    borderRadius: 5,
    elevation: 3,
  },
  detailsItemTitle: {
    fontSize: 17,
  },
  detailsItemContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 15,
    paddingBottom: 15,
  },
  wrapper: {
    flex: 1,
  },
  aboutHeader: {
    fontSize: 15,
    color: '#691A99',
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e0e0e0',
  },
  about: {
  },
  aboutContainer: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    elevation: 3,
    borderRadius: 5,
    margin: 10,
    flex: 1,
  },
  editAboutIcon: {
    borderLeftWidth: 2,
    borderColor: '#e0e0e0',
    paddingLeft: 5,
    paddingVertical: 5,
  },
});

export default styles;

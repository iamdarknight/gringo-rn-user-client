import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  logo: {
    height: 72,
    width: 125,
  },

  loginButton: {
    marginBottom: 1,
    elevation: 3,
  },

});

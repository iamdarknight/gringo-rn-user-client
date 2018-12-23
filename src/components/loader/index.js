// @flow
import React from 'react';
import {
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Styles from './styles';

const Loader = () => (
  <View style={Styles.progressBar}>
    <ActivityIndicator size="large" color={Platform.OS === 'ios' ? 'white' : '#EA0000'} />
  </View>
);

export default Loader;

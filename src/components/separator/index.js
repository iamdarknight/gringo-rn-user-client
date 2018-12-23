import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { withTheme } from 'react-native-paper';

class Separator extends React.PureComponent<Props> {
  render() {
   const { colors } = this.props.theme;
    return (
      <View
        style={{
            height: this.props.height || 0.7,
            width: this.props.width || '86%',
            backgroundColor: colors.background,
            marginLeft: this.props. marginLeft || '14%',
          }}
      />);
  }
}

export default withTheme(Separator);


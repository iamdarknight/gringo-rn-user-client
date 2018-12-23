import React from 'react';
import {
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { withTheme } from 'react-native-paper';

class Separator extends React.PureComponent<Props> {
  render() {
   const { colors } = this.props.theme;
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: colors.background,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
}

export default withNavigation(withTheme(Separator));


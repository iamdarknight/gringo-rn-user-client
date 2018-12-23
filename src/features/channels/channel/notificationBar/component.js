import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { material, robotoWeights } from 'react-native-typography';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AccountChannelNotificationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this variable determines the app showing in the flag fab modal.
      // It is mutated by the pop over menu options
    };
  }

  componentDidMount() {
  }


  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    const { name, privacy, broadcasting } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'stretch',
          marginHorizontal: 5,
          backgroundColor: colors.surface,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: colors.surface,
            width: 110,
          }}
        >
          <Text style={[material.body2, robotoWeights.condensedBold, { color: colors.primary, paddingHorizontal: 10 }]}>{name.toUpperCase()}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: colors.surface,
          }}
        >
          <Icon name="wifi-tethering" size={20} color={broadcasting ? colors.primary : colors.background} />
          <Text style={[material.body2, robotoWeights.condensedBold, { color: broadcasting ? colors.primary : colors.background, paddingHorizontal: 10 }]}>LIVE</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: colors.surface,
          }}
        >
          <Icon name="public" size={20} color={colors.primary} />
          <Text style={[material.body2, robotoWeights.condensedBold, { color: colors.primary, paddingHorizontal: 10 }]}>{privacy.label.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

export default withTheme(AccountChannelNotificationBar);


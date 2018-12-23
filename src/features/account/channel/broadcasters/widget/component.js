import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import { withTheme, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Separator from '@gringo/components/separator';
import { material, robotoWeights } from 'react-native-typography';
import { ListItem } from 'react-native-elements';
import { Styles } from '@gringo/styles/global';
import { withNavigation } from 'react-navigation';

class ChannelBroadcasters extends Component {
  state = {
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <FlatList
        data={[
          {
            id: '1',
            name: 'Broadcasters',
            broadcasters: this.props.broadcasters.length,
            icon: 'users',
          },
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (<Separator />)}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={item.name}
            titleStyle={[Styles.flatListItemTitle, material.subheading, robotoWeights.regular]}
            badge={{ value: item.broadcasters, containerStyle: { backgroundColor: colors.background }, textStyle: { color: colors.primary } }}
            leftIcon={<Icon name={item.icon} size={25} color={colors.primary} />}
            hideChevron
            containerStyle={Styles.flatListItemContainer}
            onPress={() => { this.props.navigation.navigate('ACCOUNT_CHANNEL_BROADCASTERS'); }}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default withNavigation(withTheme(ChannelBroadcasters));

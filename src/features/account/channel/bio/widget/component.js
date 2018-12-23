import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { material, robotoWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Separator from '@gringo/components/separator';
import { ListItem } from 'react-native-elements';
import { Styles } from '@gringo/styles/global';
import { withNavigation } from 'react-navigation';

class ChannelBio extends Component {
  state = {
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <FlatList
        data={[
          {
            id: '1',
            name: 'Bio',
            bio: this.props.bio,
            icon: 'bio',
          },
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (<Separator />)}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={item.bio}
            titleNumberOfLines={4}
            titleStyle={[Styles.flatListItemTitle, material.subheading, robotoWeights.light]}
            leftIcon={<Icon name={item.icon} size={25} color={colors.primary} />}
            hideChevron
            containerStyle={Styles.flatListItemContainer}
            onPress={() => { this.props.navigation.navigate('ACCOUNT_CHANNEL_BIO'); }}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default withNavigation(withTheme(ChannelBio));

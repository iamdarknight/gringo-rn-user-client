import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import { withTheme, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { material, robotoWeights } from 'react-native-typography';
import Separator from '@gringo/components/separator';
import { ListItem } from 'react-native-elements';
import { Styles } from '@gringo/styles/global';
import { withNavigation } from 'react-navigation';

class ChannelActivity extends Component {
  state = {
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <FlatList
        data={[
          {
            id: '1',
            name: 'Activity',
            activity: this.props.broadcasts.length,
            icon: 'activity',
          },
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (<Separator />)}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={item.name}
            titleStyle={[Styles.flatListItemTitle, material.subheading, robotoWeights.regular]}
            badge={{ value: item.activity, containerStyle: { backgroundColor: colors.background }, textStyle: { color: colors.primary } }}
            leftIcon={<Icon name={item.icon} size={25} color={colors.primary} />}
            hideChevron
            containerStyle={Styles.flatListItemContainer}
            onPress={() => { this.props.navigation.navigate('ACCOUNT_CHANNEL_ACTIVITY'); }}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default withNavigation(withTheme(ChannelActivity));

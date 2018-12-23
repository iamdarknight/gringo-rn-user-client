import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { withTheme, Chip, Text } from 'react-native-paper';
import { Avatar, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { material, robotoWeights, webWeights } from 'react-native-typography';
import MapView from '@gringo/map/channel';
import Styles from './styles';

class ChannelHome extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null,
  });

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  render() {
    const { colors } = this.props.theme;
    const channel = this.props.navigation.getParam('channel');
    const {
      avatar,
      broadcasts,
      subscribers,
      bio,
      activity,
      broadcasters,
      broadcasting,
      name,
      privacy,
      subscribed,
    } = channel;
    return (
      <View style={{ flex: 1 }}>
      <MapView feed={broadcasts} />
      <View style={{ justifyContent: 'space-between', flex: 1, padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Avatar
            size="medium"
            rounded
            source={{uri: avatar }}
            containerStyle={{ borderWidth: 1, borderColor: colors.accent}}
            activeOpacity={0.7}
          />
          <Text style={[ material.title, webWeights.regular,{ } ]}>{channel.name}</Text>
          <Icon
            reverse
            raised
            name='info'
            type='font-awesome'
            color={colors.primary}
            size={15}
            onPress={() => console.log('hello')}
          />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Chip icon="timeline" onPress={() => console.log('Pressed')} theme={{ colors: { text: 'white'  } }} style={{ backgroundColor: colors.primary }}>Activity {broadcasts.length}</Chip>
          <Chip icon="favorite" onPress={() => console.log('Pressed')} theme={{ colors: { text: 'white'  } }} style={{ backgroundColor: colors.primary }}>Subscribers {subscribers.length}</Chip>
          <Chip icon="group" onPress={() => console.log('Pressed')}  theme={{ colors: { text: 'white'  } }} style={{ backgroundColor: colors.primary }}>Broadcasters {broadcasters.length}</Chip>
        </View>
      </View>
      </View>
    );
  }
}

export default withNavigation(withTheme(ChannelHome));

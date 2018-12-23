import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { withTheme, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TimeAgo from 'react-native-timeago';
import AvView from './AvView';

class AccountChannelActivity extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Channel Activity',
      headerStyle: {
        backgroundColor: navigation.getParam('backgroundColor'),
      },
      headerTintColor: navigation.getParam('primaryColor'),
    });

    renderSeparator = () => {
      const { colors } = this.props.theme;
      return (
      <View
        style={{
              height: StyleSheet.hairlineWidth,
              width: '100%',
              backgroundColor: colors.background,
            }}
      />
    )};

    componentDidMount() {
      this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
      this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
    }
    render() {
      const { colors } = this.props.theme;
      return (
        <FlatList
          style={{ flex: 1, backgroundColor: colors.background }}
          data={this.props.broadcasts}
          renderItem={({ item }) => (
            <View>
            <View
              style={{
                height: 60,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  width: 36,
                  height: 36,
                  margin: 12,
                  borderRadius: 18,
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: 'lightgray',
                }}
                source={{ uri: item.broadcaster.avatar }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  height: 60,
                  lineHeight: 60,
                  flex: 1,
                }}
              >
                {item.broadcaster.name}
              </Text>
              <TimeAgo
                time={item.created}
                hideAgo={true}
                style={{
                  marginRight: 8,
                  color: colors.backdrop,
                  fontSize: 12,
                }}
              />
              <TouchableRipple style={{ padding: 2,  marginRight: 8 }}>
                <Icon name="loyalty" size={15} color='#691A99' />
              </TouchableRipple>
            </View>
            <AvView type={item.type} source={item.video} />
            <View style={{ height: 54, backgroundColor: 'white', padding: 17, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View
                  onPress={() => {}}
                  style={{
                  flexDirection: 'row',
                }}
                >
                  <Icon name="donut-large" size={15} color={colors.background} />
                  <Text style={{ marginLeft: 5, color: colors.background, fontSize: 12 }}>ACTIVE</Text>
              </View>
              <View
                  onPress={() => {}}
                  style={{
                  flexDirection: 'row',
                }}
                >
                  <Icon name="favorite-border" size={20} color={colors.background} />
                  <Text style={{ marginLeft: 5, color: colors.background, fontSize: 15 }}>{item.likes}</Text>
              </View>
            </View>
            {this.renderSeparator()}
          </View>
        )}
        keyExtractor={item => item.id}
        />
      );
    }
}
export default withTheme(AccountChannelActivity);

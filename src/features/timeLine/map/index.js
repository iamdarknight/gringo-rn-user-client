import React, { Component } from 'react';
import Video from 'react-native-video';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvView from '../AvView';
import Map from '@gringo/map';

const data = [{
  key: '1',
  username: 'james',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
  avatarUrl: 'https://unsplash.it/100?image=1005',
}, {
  key: '2',
  username: 'jennifer',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/baking.jpg',
  avatarUrl: 'https://unsplash.it/100?image=1027',
}, {
  key: '3',
  username: 'cathy',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  avatarUrl: 'https://unsplash.it/100?image=996',
}, {
  key: '4',
  username: 'zack',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/landscape.jpg',
  avatarUrl: 'https://unsplash.it/100?image=856',
}, {
  key: '5',
  username: 'luke',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/snow.jpg',
  avatarUrl: 'https://unsplash.it/100?image=669',
}, {
  key: '6',
  username: 'anna',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/garden.mov',
  avatarUrl: 'https://unsplash.it/100?image=823',
}, {
  key: '7',
  username: 'ken',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg',
  avatarUrl: 'https://unsplash.it/100?image=550',
}];

class Highlights extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Map Timeline',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerRight:
    (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
          flexDirection: 'row',
          margin: 5,
          borderRadius: 50,
          padding: 5,
        }}
        >
          <Icon name="search" size={25} color={navigation.getParam('primaryColor')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
          style={{
          flexDirection: 'row',
          margin: 5,
          borderRadius: 50,
          padding: 5,
        }}
        >
          <Icon name="star-border" size={25} color={navigation.getParam('primaryColor')} />
        </TouchableOpacity>
      </View>
    ),
    headerTintColor:  navigation.getParam('primaryColor'),
  });
  constructor(props) {
    super(props);
    this.state = {
      starred: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  toggleStarred = () => {
    if (this.state.starred) {
      this.setState({ 'starred': false });
    } else
    {
      this.setState({ 'starred': true });
    }
  }

  renderSeparator = () => (
    <View
      style={{
            height: StyleSheet.hairlineWidth,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '14%',
          }}
    />
  );
  render() {
    const { colors } = this.props.theme;
    return (
      <Map />
    );
  }
}
export default withTheme(Highlights);

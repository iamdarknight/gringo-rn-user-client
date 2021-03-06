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

class StarredHighlights extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Pinned',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerRight: (
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
    ),
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
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

      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => (
          <View>
          <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row' }}>
            <Image
              style={{
width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray',
}}
              source={{ uri: item.avatarUrl }}
            />
            <Text style={{
fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1,
}}
            >{item.username}
            </Text>
            <Ionicons name="ios-more" size={30} color="#0288d1" style={{ lineHeight: 60, marginRight: 15 }} />
          </View>
          <AvView type={item.type} source={item.source} />
          <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
            <View
                onPress={() => navigation.navigate('STORE')}
                style={{
                flexDirection: 'row',
                margin: 10,
                backgroundColor: '#0288d1',
                borderRadius: 50,
                padding: 7,
              }}
              >
                <Icon name="donut-large" size={20} color="white" />
                <Text style={{ marginLeft: 5, color: 'white' }}>ACTIVE</Text>
              </View>
            <View style={{ flex: 1 }} />
            <Icon name="star-border" size={34} color="#0288d1" style={{ marginTop: 12, marginRight: 15 }} />
          </View>
          {this.renderSeparator()}
        </View>
      )}
      />
      );
    }
}
export default withTheme(StarredHighlights);

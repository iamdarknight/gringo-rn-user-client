import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { withTheme, Surface } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import Separator from '@gringo/components/separator';
import Share from './share/';
import * as Animatable from 'react-native-animatable';
import Header from './header';
import NotificationBar from './notificationBar/';
import BioWidget from './bio/widget';
import BroadcastersWidget from './broadcasters/widget';
import ActivityWidget from './activity/widget';
import Styles from './styles';

class ChannelHome extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerRight:
      (
        <Animatable.View
          animation="zoomIn"
          easing="ease-in-out"
          direction="alternate"
          duration={700}
          useNativeDriver
        >
          {<Share />}
        </Animatable.View>
      ),
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
    this.props.navigation.setParams({ 'channelName': this.props.name });
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <Surface style={Styles.container}>
        <Animatable.View
          animation="fadeIn"
          easing="ease-in-out"
          direction="alternate"
          duration={700}
          useNativeDriver
        >
          {<Header />}
        </Animatable.View>
        <NotificationBar />
        <ScrollView style={Styles.scrollList} showsVerticalScrollIndicator>

          <Animatable.View
            animation="fadeInLeft"
            easing="ease-in-out"
            direction="alternate"
            duration={1000}
            useNativeDriver
          >
            {<BioWidget />}
          </Animatable.View>

          <Animatable.View
            animation="fadeInLeft"
            easing="ease-in-out"
            direction="alternate"
            duration={1000}
            delay={300}
            useNativeDriver
          >
            {<Separator />}
            {<ActivityWidget />}
          </Animatable.View>

          <Animatable.View
            animation="fadeInLeft"
            easing="ease-in-out"
            direction="alternate"
            duration={1000}
            delay={600}
            useNativeDriver
          >
            {<Separator />}
            {<BroadcastersWidget />}
          </Animatable.View>

        </ScrollView>
      </Surface>
    );
  }
}

export default withNavigation(withTheme(ChannelHome));

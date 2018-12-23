import React, { Component } from 'react';
import {
  Marker,
  Callout,
} from 'react-native-maps';
import {
  View,
  Animated,
  Easing,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { material, robotoWeights, webWeights } from 'react-native-typography';
import { Text, Portal, withTheme  } from 'react-native-paper';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import AvView from '../AvView';
import Theme from '@gringo/styles/global';
import FastImage from 'react-native-fast-image';
import Interactable from 'react-native-interactable';
import LottieView from 'lottie-react-native';
import MarkerIcon from '../assets/directMessages.png';
import LikeAnimation from '../assets/animations/like (1).json';
import Styles from './styles';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { colors } = Theme;

class DirectMessagePin extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
    this.state = {
      progress: new Animated.Value(0),
      interactableMenuItems: [
        {
          title: 'Chat',
          icon: 'message-text',
        },
        {
          title: 'Pin to map',
          icon: 'pin',
        },
        {
          title: 'Delete message',
          icon: 'delete-forever',
        },
        {
          title: 'Block Sender',
          icon: 'block-helper',
        },
      ],
    };
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }

  interactableActions = (lightboxId, index) => { this.refs[lightboxId].snapTo({ index }); };

  interactableLinkPress = (lightboxId, link) => { this.interactableActions(lightboxId, 1); this.props.navigation.navigate('BROWSER', { link }); }

  like = () => {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }

  renderRow = ({ item }) => (
    <ListItem
      key={item.title}
      title={item.title}
      leftIcon={{
        name: item.icon,
        type: 'material-community',
        color: colors.primary,
        size: 25,
      }}
      hideChevron
      onPress={item.onPress}
      containerStyle={Styles.rowContainer}
      titleStyle={[material.subheading, webWeights.regular, {}]}
    />
  )
  render() {
    const { showDirectMessages, directMessages } = this.props;
    return (
      showDirectMessages ? directMessages.map(marker => {
        const lightboxId = marker.id.toString();
        return (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.location.latitude,
            longitude: marker.location.longitude,
          }}
          image={MarkerIcon}
        >
          <Callout onPress={() => this.interactableActions(lightboxId, 0)}>
            <View style={Styles.calloutContainer}>
              <View style={Styles.calloutHeader} >
                <Image style={Styles.calloutHeaderImage} source={{ uri: marker.sender.avatar }} />
                <Text style={Styles.calloutHeaderTitle} >
                  {marker.sender.name }
                </Text>
                <TimeAgo hideAgo={true} time={marker.created} style={{ color: colors.backdrop, fontSize: 12 }} />
              </View>
              <View style={Styles.calloutBodyContainer} >
                {
                  marker.type === 'video' ? <Icon name="play-circle-filled" size={60} color={colors.surface} /> :
                  <Image style={Styles.calloutBodyImage} source={{ uri: marker.source }} />
                }
              </View>
              <View style={Styles.calloutFooterContainer} >
                <View style={Styles.calloutFooterTextContainer} >
                  <Text ellipsizeMode="tail" numberOfLines={1}>{ marker.message }</Text>
                </View>
                { marker.link !== '' ?
                  <View style={Styles.calloutFooterLinkIcon} >
                    <Icon name="language" size={20} color={colors.background} />
                  </View> :
                null
              }
              </View>
            </View>
            <Portal>
              <View style={Styles.panelContainer} pointerEvents="box-none">
                <Animated.View
                  pointerEvents="box-none"
                  style={[Styles.panelContainer, {
                  backgroundColor: 'black',
                  opacity: this._deltaY.interpolate({
                    inputRange: [0, Screen.height - 100],
                    outputRange: [0.5, 0],
                    extrapolateRight: 'clamp',
                  }),
                }]}
                />
                <Interactable.View
                  ref={lightboxId}
                  verticalOnly={true}
                  snapPoints={[{ y: 0 }, { y: Screen.height - 0 }]}
                  boundaries={{ top: -300 }}
                  initialPosition={{ y: Screen.height }}
                  animatedValueY={this._deltaY}
                >
                  <View style={Styles.panel}>
                    <View  styles={{  }}>
                      <AvView type={marker.type} source={marker.source} />
                      <TouchableOpacity
                        onPress={() => this.interactableActions(lightboxId, 1)}
                        style={Styles.interactableCloseButton}
                      >
                        <Icon name="close" size={20} color={colors.surface} />
                      </TouchableOpacity>
                    </View>
                    <View styles={{  }}>
                      <View style={Styles.interactableHeader} >
                        <View style={Styles.interactableHeaderAvatarContainer}>
                          <Image
                            style={Styles.interactableHeaderAvatar}
                            source={{ uri: marker.sender.avatar }}
                          />
                        </View>
                        <View style={Styles.interactableMainContainer}>
                          <View style={Styles.interactableHeaderInfoContainer} >
                            <Text style={[material.body1, robotoWeights.bold, {}]}>{ marker.sender.name }</Text>
                            <TimeAgo  hideAgo={true} time={marker.created} style={[material.body1, robotoWeights.condensedBold, {}]} />
                          </View>
                          <View style={Styles.interactableMessage} >
                            <Text style={[material.body1, robotoWeights.light, {}]}>{ marker.message }</Text>
                          </View>
                          <View style={Styles.interactableActions} >
                            <TouchableOpacity
                              onPress={() => this.interactableLinkPress(lightboxId, marker.link)}
                              style={Styles.interactableLink}
                            >
                              <Icon name="language" size={20} color={colors.background} />
                            </TouchableOpacity>
                            <View style={Styles.interactableLikeContainer}>
                              <TouchableWithoutFeedback onPress={this.like}>
                                <LottieView
                                  source={LikeAnimation}
                                  progress={this.state.progress}
                                  style={Styles.interactableLikeAnimation}
                                />
                              </TouchableWithoutFeedback>
                              <Text style={[material.caption, robotoWeights.thin, {  }]}>
                                { marker.likes }
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <FlatList
                        style={Styles.interactableMenu}
                        data={this.state.interactableMenuItems}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.title}
                      />
                    </View>
                  </View>
                </Interactable.View>
              </View>
            </Portal>
          </Callout>
        </Marker> )}) : null
    );
  }
}


export default withNavigation(withTheme(DirectMessagePin));

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
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { material, robotoWeights } from 'react-native-typography';
import { Text, Portal, withTheme  } from 'react-native-paper';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import Theme from '@gringo/styles/global';
import Interactable from 'react-native-interactable';
import MarkerIcon from '../assets/cart.png';

import Styles from './styles';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { colors } = Theme;

class ServiceCartPins extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
    this.state = {
      progress: new Animated.Value(0),
    };
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }

  like = () => {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }

  panelActions = (lightboxId, index) => { this.refs[lightboxId].snapTo({ index }); };

  renderRow = ({ item }) => (
    <ListItem
      key={item.id}
      title={item.name}
      leftAvatar={{
          source: { uri: item.avatar_url },
          avatarStyle: Styles.rowAvatar,
          containerStyle: Styles.rowAvatarContainer,
          overlayContainerStyle: Styles.rowAvatarContainerOverlay,
        }}
      titleStyle={[material.subheading, robotoWeights.regular, {}]}
      containerStyle={Styles.rowContainer}
      subtitle={<View
        style={Styles.rowSubtitle}
      >
        <Text
          style={[material.caption, robotoWeights.condensedBold, Styles.rowSubtitleText]}
        >
          {item.quantity}
        </Text>
                </View>}
      badge={{ value: (item.unitPrice * item.quantity).toFixed(2), textStyle: Styles.rowBadgeText, containerStyle: Styles.rowBadgeContainer }}
    />
  )

  render() {
    const { carts } = this.props;
    return (
      carts.map((marker) => {
        const lightboxId = marker.id.toString();
        return (
          <Marker
            key={marker.id}
            coordinate={{
            latitude: marker.dropLocation.latitude,
            longitude: marker.dropLocation.longitude,
          }}
            image={MarkerIcon}
          >
            <Callout onPress={() => this.panelActions(lightboxId, 0)}>
              <View style={Styles.calloutContainer}>
                <View style={Styles.calloutHeader} >
                  <Image style={Styles.calloutHeaderImage} source={{ uri: marker.service.logo }} />
                  <Text style={Styles.calloutHeaderTitle} >
                    {marker.service.name }
                  </Text>
                  <TimeAgo hideAgo={true} time={marker.ordered} style={{ color: colors.backdrop, fontSize: 12 }} />
                </View>
                <View style={Styles.calloutBodyContainer} >
                  {marker.type === 'cartServices' ? <Icon name="shopping-cart" size={60} color={colors.surface} /> : null }
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
                      <View style={Styles.panelHeader}>
                        <View
                          style={Styles.panelHeaderLogoContainer}
                        >
                          <View style={{}}>
                            <Image
                              style={Styles.panelHeaderLogo}
                              source={{ uri: marker.service.logo }}
                            />
                          </View>
                          <View style={{}}>
                            <View
                              style={Styles.panelHeaderInfo}
                            >
                              <Text style={[material.title, robotoWeights.bold, {}]}>{ marker.service.name }</Text>
                              <TimeAgo  hideAgo={true} time={marker.ordered} style={[material.subheading, robotoWeights.condensedBold, {}]} />
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity
                          onPress={() => this.panelActions(lightboxId, 1)}
                          style={Styles.panelCloseButton}
                        >
                          <Icon name="close" size={20} color={colors.background} />
                        </TouchableOpacity>
                      </View>
                      <View style={Styles.panelList}>
                        <FlatList
                          data={marker.contents}
                          renderItem={this.renderRow}
                          keyExtractor={item => item.id.toString()}
                        />
                      </View>
                      <View style={Styles.panelFooter}>
                        <Icon name="shopping-cart" size={30} color={colors.primary} />
                        <Text style={[material.title, robotoWeights.condensedBold, { color: colors.backdrop }]}>${marker.cartCost.toFixed(2)}</Text>
                      </View>
                    </View>
                  </Interactable.View>
                </View>
              </Portal>
            </Callout>
          </Marker> ); }): null
    );
  }
}


export default withNavigation(withTheme(ServiceCartPins));

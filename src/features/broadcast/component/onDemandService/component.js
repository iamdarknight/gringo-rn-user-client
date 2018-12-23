import React, { Component } from 'react';
import {
  withTheme,
  TouchableRipple,
  Text,
  Surface,
  Paragraph,
  Dialog,
  Portal,
  Button,
} from 'react-native-paper';
import {
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import Map from '@gringo/map/broadcast';
import View from '@gringo/components/view/';
import { material, robotoWeights } from 'react-native-typography';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import Theme from '@gringo/styles/global';
import Interactable from 'react-native-interactable';
import Styles from './styles';


const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const { colors } = Theme;
const { width, height } = Dimensions.get('window');
class BroadcastOnDemandService extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backdropColor': this.props.theme.colors.backdrop });
    this.props.navigation.setParams({ 'accentColor': this.props.theme.colors.accent });
    this.props.navigation.setParams({ 'background': this.props.theme.colors.background });
  }

  renderCatalogRow = ({ item }) => (
    <ListItem
      onPress={() => this.props.toggleCartSelection(item.cartId, item.id)}
      leftAvatar={{
        rounded: true,
        source: { uri:item.avatar_url },
        avatarStyle: { height: 60, width: 60, borderRadius: 5 },
        containerStyle: { height: 60, width: 60, borderRadius: 5 },
        overlayContainerStyle: { borderRadius: 5, borderWidth: 0 },
      }}
      titleStyle={[material.subheading, robotoWeights.regular, {}]}
      containerStyle={{ borderBottomWidth: 0, backgroundColor: item.selected ? colors.background : colors.accent }}
      title={item.name}
      subtitle={<View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            paddingRight: 20,
          }}
      >
        <Text style={[material.body1, robotoWeights.thin, {}]}>${item.selected ? (item.unitPrice * item.quantity).toFixed(2) : item.unitPrice.toFixed(2)}</Text>
        { item.selected ? <Text
          style={[material.caption, robotoWeights.condensedBold, {
              color: colors.primary,
              backgroundColor: colors.accent,
              borderRadius: 15,
              paddingHorizontal: 5,
              textAlign: 'center',
            }]}
        >{item.quantity}
                          </Text> : null }
                </View>}
      rightIcon={item.selected ? <View>
        <TouchableOpacity
          onPress={() => this.props.increaseCartItem(item.cartId, item.id)}
          style={{ padding: 4, marginBottom: 5 }}
        >
          <AIcon name="pluscircle" size={15} color={colors.surface} />
        </TouchableOpacity>
        { item.quantity <= 1 ? null :
        <TouchableOpacity
          onPress={() => this.props.decreaseCartItem(item.cartId, item.id)}
          style={{ padding: 4, marginTop: 5 }}
        >
          <AIcon name="minuscircle" size={15} color={colors.surface} />
        </TouchableOpacity>
        }
                                 </View>
          : <View><Text style={[material.caption, robotoWeights.condensedBold, {}]}>ADD</Text></View>
        }
    />
  )

  renderCartRow = ({ item }) => {
    if (item.selected) {
      return (
        <ListItem
          avatarContainerStyle={{}}
          avatarOverlayContainerStyle={{}}
          avatarStyle={{}}
          titleStyle={[material.caption, robotoWeights.thin, {
              color: colors.primary,
            }]}
          containerStyle={{ borderBottomWidth: 0 }}
          title={item.name}
          avatar={<Text style={[material.caption, robotoWeights.condensedBold, {
              color: colors.primary,
              backgroundColor: colors.background,
              borderRadius: 15,
              paddingHorizontal: 5,
            }]}
          >{item.quantity}
                  </Text>}
          rightIcon={<Text style={[material.caption, robotoWeights.thin, {
              color: colors.primary,
            }]}
          >${(item.unitPrice * item.quantity).toFixed(2)}
                     </Text>}
        />
      );
    }
  }

  renderServiceRow = item => {
    const lightboxId = item.id.toString();
    return (
      <View
        key={item.id}
        style={{
          marginHorizontal: 5, marginBottom: 5, borderRadius: 5, alignSelf: 'flex-end', width: width - 20, elevation: 3, padding: 10, backgroundColor: colors.surface,
          }}
      >
        <TouchableOpacity onPress={() => this.props.toggleCart(item.id)}>

          <View hide={!item.cartIsVisible} style={{  }}>
            <Animatable.View animation="fadeIn" easing="ease-in-out" useNativeDriver>
              <Surface
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <TouchableRipple
                  onPress={() =>  this.refs[lightboxId].snapTo({ index: 0 })}
                  style={{
                    marginHorizontal: 5,
                    flex: 6,
                  }}
                >
                  { item.cartCost === 0.00 ? <View
                    style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Icon name="add-shopping-cart" size={25} color={colors.background} />
                    <Text style={{ textAlign: 'center' }}>Click here to start shopping</Text>
                  </View> :
                  <FlatList
                    data={item.catalog}
                    renderItem={this.renderCartRow}
                    keyExtractor={item => item.id.toString()}
                  />}
                </TouchableRipple>
                <View
                  style={{
                    flex: 2,
                    marginVertical: 10,
                    marginRight: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={[material.title, robotoWeights.condensedBold, { color: colors.backdrop }]}>${item.cartCost.toFixed(2)}</Text>

                  <TouchableOpacity
                    style={{
                    padding: 10,
                    margin: 5,
                    backgroundColor: colors.primary,
                    borderRadius: 40,
                    elevation: 4,
                  }}
                    onPress={() => {}}
                  >
                    <Icon name="monetization-on" size={20} color={colors.surface} />
                  </TouchableOpacity>
                </View>
              </Surface>
            </Animatable.View>

          </View>
          <Surface
            style={{
              }}
          >
            <View
              style={{
                  height: 80,
                  flexDirection: 'row',
                  backgroundColor: 'white',
                }}
            >
              <Image
                style={{
                    width: 80,
                    height: 80,
                  }}
                source={{ uri: item.logo }}
              />
              <View style={{ flex: 1, margin: 4 }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[material.subheading, robotoWeights.thin, {
                        flex: 1,
                      }]}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text
                    style={[material.body1, robotoWeights.condensed, {
                        flex: 1,
                      }]}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          </Surface>

        </TouchableOpacity>
        
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
          <Portal>
          <Interactable.View
            ref={lightboxId}
            verticalOnly={true}
            snapPoints={[{ y: 50, damping: 0.8, tension: 500 }, { y: Screen.height - 0 }]}
            boundaries={{ top: -300 }}
            initialPosition={{ y: Screen.height }}
            animatedValueY={this._deltaY}
          >
            <View style={Styles.panel}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: colors.primary, padding: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, elevation: 3 }}>
                <Text style={[material.title, robotoWeights.condensedBold, { color: colors.backdrop }]}>${item.cartCost.toFixed(2)}</Text>
                  <Button icon="shopping-cart" mode='text' color={colors.surface} onPress={() => this.refs[lightboxId].snapTo({ index: 1 })}>
                    CheckOut
                  </Button>
              </View>
              <ScrollView contentContainerStyle={{ height: Screen.height }}>
                <FlatList
                  data={item.catalog}
                  renderItem={this.renderCatalogRow}
                  keyExtractor={item => item.id.toString()}
                />
              </ScrollView>
            </View>
          </Interactable.View>
          </Portal>
        </View>
      </Portal>
      </View>
  )};

  goToOnDemand = () => this.props.navigation.navigate('BROADCAST_ON_DEMAND_SERVICE');

  goToDirectMessage = () => this.props.navigation.navigate('BROADCAST_DIRECT_MESSAGE');

  goToBroadcast = () => this.props.navigation.navigate('BROADCAST');

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 9 }}>
          <Map onMapPress={this.mapPress} marker="cart" description="Press and drag to set delivery point" />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FEED')}
          style={{
            position:'absolute',
            padding: 5,
            top: 15,
            backgroundColor: colors.backdrop,
            borderRadius: 25,
            right: 15,
          }}
        >
          <Icon name="close" size={20} color={colors.surface} />
        </TouchableOpacity>
        <View style={{ position: 'absolute', bottom: 80 }} >
          <ScrollView horizontal bounces showsHorizontalScrollIndicator={false}>
            {this.props.cartServices.map(this.renderServiceRow)}
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: colors.accent,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                padding: 8,
                margin: 3,
              }}
              onPress={this.goToBroadcast}
            >
              <Icon name="whatshot" size={25} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 8,
                margin: 3,
              }}
              onPress={this.goToDirectMessage}
            >
              <Icon name="message" size={25} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: colors.background,
                margin: 3,
                borderRadius: 7,
              }}
            >
              <Icon name="shopping-cart" size={25} color={colors.surface} />
            </TouchableOpacity>
          </View>
          <View
            style={{
                flexDirection: 'row',
              }}
           />
        </View>
      </View>
    );
  }
}

export default withNavigation(withTheme(BroadcastOnDemandService));


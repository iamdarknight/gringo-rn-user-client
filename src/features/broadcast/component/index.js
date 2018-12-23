import React, { Component } from 'react';
import {
  withTheme,
  Text,
  Surface,
  Dialog,
  Portal,
  Button,
  Appbar,
} from 'react-native-paper';
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  CameraRoll,
} from 'react-native';
import { material, robotoWeights } from 'react-native-typography';
import * as Animatable from 'react-native-animatable';
import { List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Map from '@gringo/map/broadcast';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OIcon from 'react-native-vector-icons/Octicons';
import { Avatar } from 'react-native-elements';
import View from '@gringo/components/view/';

const list = [
  {
    name: 'Health & Fitness',
    avatar_url: 'https://pbs.twimg.com/profile_images/1056556181039300609/8PHmGQfU_400x400.jpg',
    subtitle: 'Building strong bodies',
  },
  {
    name: 'GQ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Tips For Gentlemen',
  },
  {
    name: 'CNN',
    avatar_url: 'https://www.corporateleadersgroup.com/reports-evidence-and-insights/news-images/cnn-logo.tif/image_preview',
    subtitle: 'Global News',
  },
];
class Broadcast extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: '',
      castImage: null,
      hasImage: false,
      placeholder: 'Whats happening?',
      photos: [],
    };
  }
  _statusBox = null;

  setStatusBoxRef = (ref) => {
    this._statusBox = ref;
  };

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'transparent': this.props.theme.colors.transparent });
    this.props.navigation.setParams({ 'backdropColor': this.props.theme.colors.backdrop });
    this.props.navigation.setParams({ 'accentColor': this.props.theme.colors.accent });
    this.props.navigation.setParams({ 'background': this.props.theme.colors.background });
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    })
      .then((r) => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
      // Error Loading Images
      });
  }

  addCameraImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 200,
      // cropping: true,
    }).then((image) => {
      this.setState({ 'castImage': image.path, 'hasImage': true, placeholder: 'Add a comment...' });
    })
      .catch((err) => {
      // Error Opening Camera
      });
  }

  addGalleryImage = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 300,
      // cropping: true,
    }).then((image) => {
      this.setState({ 'castImage': image.path, 'hasImage': true, placeholder: 'Add a comment...' });
    })
      .catch((err) => {
      // Error Loading Images
      });
  }

  addImage = (image) => {
    this.setState({ 'castImage': image, 'hasImage': true, placeholder: 'Add a comment...' });
  }

  removeImage = () => {
    this.setState({ 'castImage': null, 'hasImage': false, placeholder: 'Whats happening?' });
  }

  renderRow({ item }) {
    return (
      <ListItem
        roundAvatar
        onPress={() => console.log('Works!')}
        avatarContainerStyle={{ height: 60, width: 60 }}
        avatarOverlayContainerStyle={{  }}
        avatarStyle={{ height: 60, width: 60 }}
        hideChevron
        subtitleStyle={[material.body1, robotoWeights.thin, {}]}
        titleStyle={[material.subheading, robotoWeights.regular, {}]}
        containerStyle={{ borderBottomWidth: 0 }}
        title={item.name}
        subtitle={item.subtitle}
        avatar={{ uri:item.avatar_url }}
      />
    );
  }

  goToOnDemand = () => this.props.navigation.navigate('BROADCAST_ON_DEMAND_SERVICE');

  goToDirectMessage = () => this.props.navigation.navigate('BROADCAST_DIRECT_MESSAGE');

  goToBroadcast = () => this.props.navigation.navigate('BROADCAST');

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ flex: 1 }}>
          <Map onMapPress={this.mapPress} marker="whatshot" description="Press and drag to set location" />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
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
        { this.state.hasImage ?
          <View>
            <Image
              style={{
                height: 250, borderTopLeftRadius: 5, borderTopRightRadius: 5
              }}
              source={{ uri: this.state.castImage }}
            />
            <TouchableOpacity
              onPress={this.removeImage}
              style={{
                position:'absolute',
                padding: 5,
                top: 15,
                backgroundColor: colors.backdrop,
                borderRadius: 25,
                right: 15,
              }}
            >
              <Icon name="delete" size={20} color={colors.surface} />
            </TouchableOpacity>
          </View>
        : <View
            style={{
            flexDirection: 'row', backgroundColor: colors.transparent, position: 'absolute', bottom: 177 
            }}
        >
          <ScrollView horizontal bounces showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                  padding: 20,
                  margin: 5,
                  backgroundColor: colors.background,
                  borderRadius: 50,
                }}
              onPress={this.addCameraImage}
            >
              <Icon name="photo-camera" size={35} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                  padding: 20,
                  margin: 5,
                  backgroundColor: colors.background,
                  borderRadius: 50,
                }}
              onPress={() => {}}
            >
              <Icon name="fiber-manual-record" size={35} color={'red'} />
            </TouchableOpacity>
            {this.state.photos.map((p, i) => (
              <TouchableOpacity
                key={i}
                style={{
                    margin: 5,
                    borderRadius: 40,
                  }}
                onPress={() => this.addImage(p.node.image.uri)}
              >
                <Image
                  style={{
                      width: 75,
                      height: 75,
                      borderRadius: 40,
                    }}
                  source={{ uri: p.node.image.uri }}
                />
              </TouchableOpacity>
              ))}
            <TouchableOpacity
              style={{
                  padding: 20,
                  margin: 5,
                  backgroundColor: colors.background,
                  borderRadius: 50,
                }}
              onPress={this.addGalleryImage}
            >
              <Icon name="photo-library" size={35} color={colors.accent} />
            </TouchableOpacity>
          </ScrollView>
        </View>}


        <View style={{ backgroundColor: colors.accent, height: 100 }} >
          <Surface style={{ flex: 1, flexDirection: 'row', elevation: 4 }}>
            <View style={{ flex: 2 }}>
              <Avatar
                rounded
                medium
                source={{ uri: 'https://pbs.twimg.com/profile_images/1056556181039300609/8PHmGQfU_400x400.jpg' }}
                onPress={this._showDialog}
                containerStyle={{ margin: 10 }}
              />
              <Portal>
                <Dialog
                  visible={this.state.visible}
                  onDismiss={this._hideDialog}
                >
                  <Dialog.Title
                    style={[material.subheading, robotoWeights.Medium, {
                      color: colors.primary,
                  }]}
                  >
                    Pick a Channel
                  </Dialog.Title>
                  <Dialog.ScrollArea style={{ paddingHorizontal: 0  }}>
                    <ScrollView contentContainerStyle={{ }}>
                      <FlatList
                        data={list}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.name}
                      />
                    </ScrollView>
                  </Dialog.ScrollArea>
                  <Dialog.Actions>
                    <Button onPress={this._hideDialog}>Cancel</Button>
                    <Button onPress={() => console.log('Ok')}>Ok</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>
            <View style={{ flex: 7, backgroundColor: colors.accent }}>
              <View style={this.state.hasImage ? null : { flex: 1 }}>
                <TextInput
                  ref={this.setStatusBoxRef}
                  // autoFocus
                  placeholder={this.state.placeholder}
                  multiline
                  value={this.state.text}
                  onChangeText={text => this.setState({ text })}
                  style={[material.subheading, robotoWeights.regular, {
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: colors.accent,
                    borderWidth: 0,
                  }]}
                />
              </View>
            </View>
          </Surface>
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
              backgroundColor: colors.background,
              borderRadius: 7,
            }}
          >
            <Icon name="whatshot" size={25} color={colors.surface} />
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
              margin: 3,
            }}
            onPress={this.goToOnDemand}
          >
            <Icon name="shopping-cart" size={25} color={colors.primary} />
          </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
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
              <Icon name="send" size={20} color={colors.surface} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(withTheme(Broadcast));


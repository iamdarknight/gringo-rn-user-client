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

class BroadcastDirectMessage extends Component {
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
      placeholder: 'Start writing your message...',
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

  goToOnDemand = () => this.props.navigation.navigate('BROADCAST_ON_DEMAND_SERVICE');


  goToBroadcast = () => this.props.navigation.navigate('BROADCAST');

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ flex: 1 }}>
          <Map onMapPress={this.mapPress} marker="directMessage" description="Press and drag to set location" />
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
          flexDirection: 'row', backgroundColor: colors.transparent, position: 'absolute', bottom: 235 
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
              <Icon name="videocam" size={35} color={colors.accent} />
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

        
        <View style={{ backgroundColor: colors.accent, height: 160 }} >
          <TouchableOpacity onPress={() => {}} style={{ flex: 1, flexDirection: 'row', alignItems: 'center',paddingHorizontal: 10, backgroundColor: colors.background, borderTopLeftRadius: this.state.hasImage ? 0: 5, borderTopRightRadius: this.state.hasImage ? 0: 5  }}>
            <Text>Add people to this cast</Text>
          </TouchableOpacity>
          <Surface style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ flex: 2 }}>
              <Avatar
                rounded
                medium
                source={{ uri: this.props.avatar }}
                onPress={this._showDialog}
                containerStyle={{ margin: 10 }}
              />
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
            }}
            onPress={this.goToBroadcast}
          >
            <Icon name="whatshot" size={25} color={colors.primary} />
          </TouchableOpacity>
            <TouchableOpacity
            style={{
              padding: 8,
              margin: 3,
              backgroundColor: colors.background,
              borderRadius: 7,
            }}
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

export default withNavigation(withTheme(BroadcastDirectMessage));

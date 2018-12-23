import React, { Component } from 'react';
import {
  View,
  Modal,
  Image,
} from 'react-native';
import { withTheme, TouchableRipple } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNBottomActionSheet from 'react-native-bottom-action-sheet';
import styles from '../styles';

class AccountProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      avatar: this.props.avatar,
      sheetView: false,
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { colors } = this.props.theme;
    const camera = <Icon family="MaterialIcons" name="photo-camera" color={colors.primary} size={30} />;
    const gallery = <Icon family="MaterialIcons" name="photo-library" color={colors.primary} size={30} />;
    return (

      <View style={styles.avatarContainer}>
        <View style={styles.avatarWrapper}>
          <Avatar
            rounded
            onPress={() => { this.setModalVisible(true); }}
            source={{ uri: this.state.avatar }}
            activeOpacity={0.7}
            avatarStyle={styles.avatar}
            containerStyle={styles.avatar}
          />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
          >
            <View style={{ flex:1 }}>
              <View>
                <TouchableRipple
                  onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
                  style={{ padding: 15 }}
                >
                  <Icon name="close" size={30} color={colors.primary} />
                </TouchableRipple>
              </View>
              <View style={{ flex:1, flexDirection:'row' }}>
                <Image
                  resizeMode="contain"
                  style={{ flex:1 }}
                  source={{ uri: this.state.avatar }}
                />
              </View>
            </View>
          </Modal>
          <TouchableRipple
            onPress={() => this.setState({ sheetView: true })}
            style={styles.updateAvatarButton}
          >
            <Icon name="photo-camera" size={30} color={colors.surface} />
          </TouchableRipple>
          <View>

            <RNBottomActionSheet.SheetView
              visible={this.state.sheetView}
              title="Choose picture from"
              theme="dark"
              onSelection={((index, value) => {
                  switch (index) {
                    case 0:
                      ImagePicker.openCamera({
                        width: 300,
                        height: 300,
                        cropping: true,
                      }).then((image) => {
                        console.log(image);
                        this.setState({ 'avatar': image.path });
                        this.props.editAvatar(image.path);
                      }).catch((err) => {
                        console.log(err);
                      });
                      break;

                    case 1:
                      ImagePicker.openPicker({
                        width: 300,
                        height: 300,
                        cropping: true,
                        cropperActiveWidgetColor: colors.primary,
                        cropperStatusBarColor: colors.primary,
                        cropperToolbarColor: colors.primary,
                        cropperToolbarTitle: 'Loading',
                      }).then((image) => {
                        console.log(image);
                        this.setState({ 'avatar': image.path });
                        this.props.editAvatar(image.path);
                      });
                      break;
                    default:
              } })}
            >
              <RNBottomActionSheet.SheetView.Item title="Camera" icon={camera} />
              <RNBottomActionSheet.SheetView.Item title="Gallery" icon={gallery} />
            </RNBottomActionSheet.SheetView>
          </View>
        </View>
      </View>
    ); }
}

export default withTheme(AccountProfilePicture);

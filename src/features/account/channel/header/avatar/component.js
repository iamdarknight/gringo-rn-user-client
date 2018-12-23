import React, { Component } from 'react';
import {
  View,
  Modal,
  Image,
} from 'react-native';
import { withTheme, TouchableRipple } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements';
import RNBottomActionSheet from 'react-native-bottom-action-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


class ChannelHeaderAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      sheetView: false,
    };
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { colors } = this.props.theme;
    const { avatar, editAvatar } = this.props;

    const camera = <Icon family="MaterialIcons" name="photo-camera" color={colors.primary} size={30} />;
    const gallery = <Icon family="MaterialIcons" name="photo-library" color={colors.primary} size={30} />;
    return (
      <View style={styles.avatarContainer}>
        <View style={styles.avatarWrapper}>
          <Avatar
            onPress={() => { this.setModalVisible(true); }}
            source={{ uri: avatar }}
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
                  source={{ uri: avatar }}
                />
              </View>
            </View>
          </Modal>
          <TouchableRipple
            onPress={this.showActionSheet}
            style={styles.updateAvatarButton}
          >
            <Icon name="photo-camera" size={25} color={colors.background} />
          </TouchableRipple>
          <View>

            <RNBottomActionSheet.SheetView
              visible={this.state.sheetView}
              title="Choose picture from"
              theme="dark"
              onSelection={((index, value) => {
                console.log(index);
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
                      });
                      break;

                    case 1:
                      ImagePicker.openPicker({
                        width: 300,
                        height: 300,
                        cropping: true,
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

export default withTheme(ChannelHeaderAvatar);

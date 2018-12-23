import React, { Component } from 'react';
import {
  View,
  Modal,
  Image,
} from 'react-native';
import { withTheme, TouchableRipple } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class AccountProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    const { colors } = this.props.theme;
    const { avatar } = this.props;
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
                  <Icon name="close-outline" size={30} color={colors.primary} />
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
        </View>
      </View>
    ); }
}

export default withTheme(AccountProfilePicture);

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  withTheme,
  Surface,
  TouchableRipple,
} from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialog from 'react-native-dialog';
import styles from '../styles';

class AccountProfileName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editNameVisible: false,
      nameInput: this.props.name,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { colors } = this.props.theme;
    const { editNameVisible, nameInput } = this.state;
    return (
      <View>
        <View style={{}}>
          <Dialog.Container visible={editNameVisible}>
            <Dialog.Title style={{ color: colors.primary}}>Edit Name</Dialog.Title>
            <Dialog.Input
              style={{
                marginBottom: 0,
                height: 40,
                backgroundColor: colors.background,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                elevation: 3,
              }}
              onChangeText={value => this.setState({ nameInput: value })}
              underlineColor={colors.primary}
              value={nameInput}
              maxLength={140}
              keyboardType="default"
              theme={{
                fonts: {
                  regular: 'Open Sans',
                },
                colors: {
                  text: colors.primary,
                },
              }}
              wrapperStyle={{
                marginTop: 15,
              }}
            />
            <Dialog.Button 
              style={{ fontWeight: '600', color: colors.background }} onPress={() => this.setState({ editNameVisible: false })} label="CANCEL" />
            <Dialog.Button
              label="OK"
              style={{ fontWeight: '600', color: colors.background }}
              onPress={
                () => {
                  this.setState({ editNameVisible: false })
                  this.props.editName(nameInput);}
               }
            />
          </Dialog.Container>
        </View>
        <Surface style={styles.usernameContainer}>
          <View>
            <Text style={styles.username}>{this.props.name}</Text>
          </View>
          <View>
            <TouchableRipple
              onPress={() => this.setState({ editNameVisible: true }) }
              style={styles.editUsername}
            >
              <Icon name="border-color" size={22} color={colors.primary} />
            </TouchableRipple>
          </View>
        </Surface>
      </View>
    );
  }
}
export default withNavigation(withTheme(AccountProfileName));

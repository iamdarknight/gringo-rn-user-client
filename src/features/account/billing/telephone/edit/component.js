import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  TextInput, FAB,
  withTheme,
  Surface,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackActions, NavigationActions } from 'react-navigation';

class EditTelephone extends Component {
  static navigationOptions = {
    title: 'Edit Telephone Details',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      input: this.props.navigation.getParam('number'),
      inputDisabled: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  componentWillUnmount() {
  }

  render() {
    const {
      input,
      inputDisabled,
    } = this.state;
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          animated
          translucent={false}
        />
        <View style={{ flex:1, justifyContent: 'space-between' }}>
          <View style={{ padding: 25, marginBottom: 15 }}>

            <TextInput
              autoFocus
              style={{ height: 40, backgroundColor: colors.background }}
              maxLength={25}
              onChangeText={value => this.setState({ input: value })}
              underlineColor={colors.primary}
              value={input}
              keyboardType="phone-pad"
              disabled={inputDisabled}
              theme={{ fonts: { regular: 'Open Sans' }, colors: { text: colors.primary } }}
            />
          </View>
          <View>
            <Surface
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                elevation: 4,
            }}
            >
              <TouchableOpacity
                onPress={() => { this.props.navigation.goBack(); }}
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                  }}
              >
                <Icon name="clear" size={22} color={colors.error} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const id = this.props.navigation.getParam('id');
                  const number = input;
                  this.props.editTelephone({ id, number });
                  this.props.navigation.goBack();
                }}
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                  }}
              >
                <Icon name="done" size={22} color="green" />
              </TouchableOpacity>
            </Surface>
          </View>
        </View>
      </View>
    );
  }
}
export default withTheme(EditTelephone);

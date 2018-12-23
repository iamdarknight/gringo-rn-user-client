import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  TextInput,
  withTheme,
  Surface,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Auth extends Component {
  static navigationOptions = {
    title: 'Edit Channel Name',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      nameInput: this.props.name,
      nameInputDisabled: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }


  render() {
    const {
      nameInput,
      nameInputDisabled,
    } = this.state;
    const { colors } = this.props.theme;
    const { name, editName } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          animated
          translucent={false}
        />
        <View style={{ flex:1, justifyContent: 'space-between' }}>
          <Surface
            style={{
              margin: 25,
              elevation: 3,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          >
            <TextInput
              autoFocus
              style={{
                marginBottom: 0,
                height: 40,
                backgroundColor: colors.background,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
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
            />
          </Surface>
          <View>
            <Surface style={{ flexDirection: 'row', justifyContent: 'space-evenly', elevation: 4 }}>
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
                onPress={() => { editName(nameInput); this.props.navigation.goBack(); }}
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
export default withTheme(Auth);

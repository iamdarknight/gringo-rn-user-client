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

class Auth extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Add About',
    headerTintColor: navigation.getParam('surfaceColor'),
    headerLeft: null,
  });

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      input: this.props.about,
      inputDisabled: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'surfaceColor': this.props.theme.colors.surface });
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
            style={{ height: 40 }}
            maxLength={25}
            onChangeText={value => this.setState({ input: value })}
            placeholder="Type here"
            underlineColor={colors.primary}
            value={input}
            keyboardType="default"
            disabled={inputDisabled}
          />
          </View>
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
                onPress={() => { this.props.editAbout(this.state.input); this.props.navigation.goBack(); }}
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

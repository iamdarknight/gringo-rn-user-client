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

class AccountProfileEdit extends Component {
  static navigationOptions = {
    title: 'Enter your name',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      codeInput: this.props.navigation.getParam('current'),
      verifyInputDisabled: false,
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
      codeInput,
      verifyInputDisabled,
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
              onChangeText={value => this.setState({ codeInput: value })}
              underlineColor={colors.primary}
              value={codeInput}
              keyboardType="default"
              disabled={verifyInputDisabled}
              theme={{fonts: { regular: 'Open Sans' }, colors: { text: colors.primary}}}
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
                onPress={() => {}}
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
export default withTheme(AccountProfileEdit);

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
  Paper,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackActions, NavigationActions } from 'react-navigation';

class Auth extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Change Number',
    headerRight: (
      <Text
        style={{ fontWeight: '600', marginRight: 20, color: navigation.getParam('backgroundColor') }}
        onPress={() => { navigation.navigate('ACCOUNT_NEW_NUMBER'); }}
      >
        NEXT
      </Text>),
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  componentWillUnmount() {
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          animated
          translucent={false}
        />
      </View>
    );
  }
}
export default withTheme(Auth);

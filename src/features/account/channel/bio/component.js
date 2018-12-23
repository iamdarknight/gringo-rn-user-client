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

class AccountChannelBio extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Edit Channel Bio',
    headerTintColor: navigation.getParam('surfaceColor'),
    headerLeft: null,
  });

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      bioInput: this.props.bio,
      bioInputDisabled: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'surfaceColor': this.props.theme.colors.surface });
  }

  componentWillUnmount() {
  }

  render() {
    const {
      bioInput,
      bioInputDisabled,
    } = this.state;
    const { colors } = this.props.theme;
    const { bio, editBio } = this.props;
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
              multiline={true}
              numberOfLines={4}
              style={{
                marginBottom: 0,
                backgroundColor: colors.background,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}
              onChangeText={value => this.setState({ bioInput: value })}
              underlineColor={colors.primary}
              value={bioInput}
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
                onPress={() => { editBio(bioInput); this.props.navigation.goBack(); }}
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
export default withTheme(AccountChannelBio);

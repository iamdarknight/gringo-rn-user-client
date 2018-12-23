import React, { Component } from 'react';
import {
  SafeAreaView,
  tatusBarS,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { List, ListItem, SearchBar } from 'react-native-elements';

class AccountHelp extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Help',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          'id': '1',
          'name': 'FAQ',
          'description': 'See questions from other gringos',
        },
        {
          'id': '2',
          'name': 'Contact us',
          'description': 'Questions? Need help?',
          route: () => { this.props.navigation.navigate('CONTACT_US'); },
        },
        {
          'id': '3',
          'name': 'Terms and Privacy Policy',
          'description': 'Review our terms and policy',
        },
        {
          'id': '4',
          'name': 'App info',
          'description': 'Application Version; Build Number',
          route: () => { this.props.navigation.navigate('APP_INFO'); },
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  renderSeparator = () => {
    const { colors } = this.props.theme;
    return (
      <View
        style={{
            height: StyleSheet.hairlineWidth,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '14%',
          }}
      />);
  };

  renderFooter = () => {
    const { colors } = this.props.theme;
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: colors.peimary,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>);
  };
  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.name}`}
                  subtitle={`${item.description}`}
                  subtitleStyle={{ fontWeight: '100' }}
                  titleStyle={{ fontSize: 16 }}
                  hideChevron
                  containerStyle={{ borderBottomWidth: 0.5, paddingTop: 20, paddingBottom: 20 }}
                  onPress={item.route}
                />
              )
            }
          keyExtractor={item => item.id}
        />
      </View>

    );
  }
}

export default withTheme(AccountHelp);


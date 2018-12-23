import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List, ListItem, SearchBar } from 'react-native-elements';

class FlagContainer extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Social Accounts',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
    headerRight: (<Text style={{ fontWeight: '600', marginRight: 20, color: navigation.getParam('primaryColor') }} onPress={() => { navigation.navigate('FEED'); }}>DONE</Text>),
  });

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          'id': '1',
          'name': 'Google',
          'icon': 'google',
          'status': 'CONNECT',
        },
        {
          'id': '2',
          'name': 'Facebook',
          'icon': 'facebook',
          'status': 'CONNECT',
        },
        {
          'id': '3',
          'name': 'Twitter',
          'icon': 'twitter',
          'status': 'CONNECT',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  renderSeparator = () => (
    <View
      style={{
            height: 0.5,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '14%',
          }}
    />
  );

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.name}`}
                  titleStyle={{ paddingLeft: 20, fontSize: 16 }}
                  rightTitle={`${item.status}`}
                  rightTitleStyle={{ fontSize: 9, fontWeight: '600', color: 'gray' }}
                  leftIcon={<Icon name={item.icon} size={23} color="#0288d1" />}
                  hideChevron
                  containerStyle={{ borderBottomWidth: 0, marginTop:15, marginBottom: 15 }}
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

export default withTheme(FlagContainer);


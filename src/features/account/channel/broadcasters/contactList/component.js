import React, { Component } from 'react';
import Contacts from 'react-native-contacts';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class FlatListDemo extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Add Broadcaster',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerRight:
    (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
          flexDirection: 'row',
          margin: 5,
          borderRadius: 50,
          padding: 5,
        }}
        >
          <Icon name="search" size={25} color={navigation.getParam('primaryColor')} />
        </TouchableOpacity>
      </View>
    ),
    headerTintColor:  navigation.getParam('primaryColor'),
  });
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      contacts: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'Describing why I need to access contact information.',
        }
      )
        .then((granted) => {
          if (granted === true || 'granted') {
            Contacts.getAll((err, contacts) => {
              this.setState({
                contacts: contacts || [],
              });
            });
          }
          else {
            alert(granted);
          }
        })
        .catch((err) => {
          console.log('PermissionsAndroid', err);
        });
    }
  }

  getPhonebookContacts = () => {
    Contacts.getContactsMatchingString('mai', (err, contacts) => {
      this.setState({
        contacts: contacts || [],
        refreshing: false,
      });
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.getPhonebookContacts();
      }
    );
  };

  handleLoadMore = () => {

  };

  renderSeparator = () => (
    <View
      style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
    />
  );

  renderHeader = () => <SearchBar placeholder="Type Here..." lightTheme round />;

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

  render() {
    return (
      <View style={{ flex: 1, borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.contacts}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.familyName} ${item.givenName}`}
              subtitle={item.phoneNumbers[0].number}
              avatar={{ uri: item.thumbnailPath || null }}
              rightTitle={`${item.phoneNumbers[0].label}`}
              rightTitleStyle={{ fontSize: 9, fontWeight: '600', color: 'gray' }}
              containerStyle={{ borderBottomWidth: 0, marginTop:15, marginBottom: 15 }}
              hideChevron
              onPress={() => this.props.addBroadcaster({ ...item })}
            />
          )}
          keyExtractor={item => item.recordID}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

export default withTheme(FlatListDemo);

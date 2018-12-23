import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Separator from '@gringo/components/separator';

class AccountChannelBroadcasters extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Channel Broadcasters',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerRight:
    (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ACCOUNT_CHANNEL_CONTACT_LIST')}
          style={{
          flexDirection: 'row',
          margin: 5,
          borderRadius: 50,
          padding: 5,
        }}
        >
          <Icon name="plus" size={25} color={navigation.getParam('primaryColor')} />
        </TouchableOpacity>
      </View>
    ),
    headerTintColor:  navigation.getParam('primaryColor'),
  });
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
    //this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

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
    const { colors } = this.props.theme;
    return (
      <View style={{ flex: 1, borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: colors.surface }}>
        <FlatList
          data={this.props.broadcasters}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.name || item.familyName || item.givenName }
              subtitle={item.status || 'No status available'}
              avatar={{ uri: item.avatar }}
              containerStyle={{ borderBottomWidth: 0, marginTop:15, marginBottom: 15 }}
              hideChevron
              onPress={() => { }}
            />
          )}
          keyExtractor={item => item.userID || item.recordID}
          ItemSeparatorComponent={() => <Separator height={1} />}
          ListFooterComponent={this.renderFooter}
          //onRefresh={this.handleRefresh}
          //refreshing={this.state.refreshing}
          //onEndReached={this.handleLoadMore}
          //onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

export default withTheme(AccountChannelBroadcasters);

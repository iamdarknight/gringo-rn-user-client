import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Separator from '@gringo/components/separator';
import { ListItem } from 'react-native-elements';

class AccountManagement extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Account',
    tabBarIcon: <Icon name="account-circle" size={25} color={navigation.getParam('primaryColor')} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: '4',
          name: 'Channel',
          icon: 'wifi-tethering',
          route: () => { this.props.navigation.navigate('ACCOUNT_CHANNEL'); },
        },
        {
          id: '2',
          name: 'Social Accounts',
          icon: 'people',
          route: () => { this.props.navigation.navigate('SOCIAL_ACCOUNTS'); },
        },
        {
          id: '1',
          name: 'Billing',
          icon: 'credit-card',
          route: () => { this.props.navigation.navigate('BILLING'); },
        },
        {
          id: '3',
          name: 'Cloud Backup',
          icon: 'backup',
          route: () => { this.props.navigation.navigate('BACKUP'); },
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  renderHeader = () => {
    const { colors } = this.props.theme;
    return (
      <ListItem
        title={this.props.userName}
        titleStyle={{ fontSize: 18 }}
        subtitle={this.props.userAbout}
        subtitleStyle={{ fontSize: 15, fontWeight: '100' }}
        leftAvatar={{
          rounded: true,
          source: {uri: this.props.userAvatar},
          avatarStyle: { width: 80, height: 80, borderRadius: 5  },
          containerStyle: { width: 80, height: 80, borderRadius: 5  },
          overlayContainerStyle: { borderRadius: 5 }
        }}
        hideChevron
        onPress={() => { this.props.navigation.navigate('PROFILE'); }}
        containerStyle={{ borderBottomWidth: 0.5, height: 100, borderColor: colors.background }}
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
          borderColor: colors.background,
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
      <View style={{ flex: 1, backgroundColor: colors.surface }}>
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          removeClippedSubviews={false}
          renderItem={({ item }) =>
                (
                  <ListItem
                    title={`${item.name}`}
                    titleStyle={{ paddingLeft: 20, fontSize: 16 }}
                    leftIcon={<Icon name={item.icon} size={23} color={this.props.theme.colors.primary} />}
                    hideChevron
                    containerStyle={{ borderBottomWidth: 0, marginTop:10, marginBottom: 10 }}
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

export default withTheme(AccountManagement);


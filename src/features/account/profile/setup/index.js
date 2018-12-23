import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { withTheme, Text, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import { List, ListItem, Avatar } from 'react-native-elements';

class FlagContainer extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Profile Setup',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
    headerLeft: null,
    headerRight: (<Text style={{ fontWeight: '600', marginRight: 20, color: navigation.getParam('primaryColor') }} onPress={() => { navigation.navigate('BILLING_SETUP'); }}>NEXT</Text>),
  });

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          'id': '1',
          'name': 'Ne Plus Ultra',
          'route': () => {},
        },
        {
          'id': '2',
          'name': '+263 7774 4810 07',
          'route': () => {},
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  renderHeader = () => (<Text
    style={{
    fontSize: 16, color: this.props.theme.colors.primary, paddingTop: 10, paddingLeft: 20,
  }}
  >
    About and phone number
                        </Text>);


  renderFooter = () => {
    const { colors } = this.props.theme;
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: colors.primary,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    const { list } = this.state;
    return (
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primary}
          translucent={false}
          animated
        />

        <View style={{ marginVertical: 50, flexDirection: 'row', justifyContent:'center' }}>
          <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <Avatar
              rounded
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              avatarStyle={{ width: 150, height: 150 }}
              containerStyle={{ width: 150, height: 150 }}
            />
            <TouchableOpacity
              onPress={this.showMenu}
              style={{ position:'absolute', padding: 5 }}
            >
              <Icon name="camera"  size={30} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <Surface
          style={{
            backgroundColor: 'white',
            alignSelf: 'stretch',
            flexDirection: 'row',
            padding: 5,
            justifyContent: 'space-between',
            elevation: 1,
          }}
        >
          <View>
            <Text style={{ fontSize: 19, margin: 5, padding: 5 }}>Schneider</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={this.showMenu}
              style={{
                flexDirection: 'row',
                margin: 5,
                borderRadius: 50,
                padding: 5,
              }}
            >
              <Icon name="border-color" size={22} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </Surface>
        <Surface style={{ marginTop: 20, marginBottom: 5 }}>
          <FlatList
            data={this.state.users}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={this.renderFooter}
            ListHeaderComponent={this.renderHeader}
            renderItem={({ item }) =>
              (
                <ListItem
                  title={`${item.name}`}
                  titleStyle={{ fontSize: 17 }}
                  hideChevron
                  containerStyle={{ borderBottomWidth: 0.5, paddingTop: 15, paddingBottom: 15 }}
                  onPress={item.route}
                />
              )
            }
            keyExtractor={item => item.id}
          />
        </Surface>
      </ScrollView>

    );
  }
}

export default withTheme(FlagContainer);


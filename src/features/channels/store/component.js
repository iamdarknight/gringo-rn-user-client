import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { withTheme, Text, Button, Card, Title, Paragraph, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { material, robotoWeights } from 'react-native-typography';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { List, ListItem, SearchBar } from 'react-native-elements';

class Favorites extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Discover',
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
            marginTop: 2,
            borderRadius: 50,
            padding: 5,
          }}
          >
            <MIcon name="search" size={25} color={navigation.getParam('primaryColor')} />
          </TouchableOpacity>
        </View>
      ),
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      users: [
        {
          'id': '1',
          'name': 'Taxi',
          'icon': 'taxi',
          'switch': false,
          'switched': false,
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
            width: '100%',
            backgroundColor: colors.background,
            marginLeft: '0%',
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
          borderColor: colors.background,
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
          data={this.props.store}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<View></View>}
          initialNumToRender={5}
          onRefresh={() => {this.setState({refreshing: true})}}
          refreshing={this.state.refreshing}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) =>
              (
                <Card>
                  <Card.Content>
                    <Title>{`${item.name}`}</Title>
                    <Paragraph>{item.bio}</Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: item.avatar || null }} />
                  <Card.Actions style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                      <Button onPress={() => this.props.navigation.navigate('CHANNEL', { 'channel': item })}>OPEN</Button>
                      <Button>ADD</Button>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Chip icon="favorite"  theme={{ colors: { text: 'white'  } }} style={{ backgroundColor: colors.primary }}>{item.broadcasters.length}</Chip>
                    </View>
                  </Card.Actions>
                </Card>
              )
            }
          keyExtractor={item => item.id}
        />
      </View>

    );
  }
}

export default withTheme(Favorites);


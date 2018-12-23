import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  FlatList,
} from 'react-native';
import { withTheme, Text, Surface, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import Picture from './picture/';
import Name from './name/';

class AccountProfile extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Profile',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
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

  renderHeader = () => (
    <Text style={styles.header}>
      About and phone number
    </Text>
  );

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    const { list } = this.state;
    return (
      <ScrollView style={{ backgroundColor: colors.surface }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primary}
          translucent={false}
          animated
        />

        <Picture />

        <Name />
        
        <Surface style={styles.details}>
          <FlatList
            data={[
              {
                'id': '1',
                'name': this.props.about,
                'route': () => { this.props.navigation.navigate('PROFILE_STATUS'); },
              },
              {
                'id': '2',
                'name': this.props.number,
                'route': () => {this.props.navigation.navigate('ACCOUNT_CHANGE_NUMBER');},
              },
            ]}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={this.renderFooter}
            ListHeaderComponent={this.renderHeader}
            renderItem={({ item }) =>
              (
                <ListItem
                  title={`${item.name}`}
                  titleStyle={styles.detailsItemTitle}
                  hideChevron
                  containerStyle={styles.detailsItemContainer}
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

export default withTheme(AccountProfile);


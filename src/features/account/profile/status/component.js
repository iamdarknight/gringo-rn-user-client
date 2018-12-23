import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { withTheme, Text, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List, ListItem, SearchBar } from 'react-native-elements';
import Separator from '@gringo/components/separator';
import Moment from 'moment';
import styles from '../styles';

class Status extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'About',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
      about: this.props.about,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

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
    const { about } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.surface, borderRadius: 5 }}>
        <Surface style={styles.aboutContainer}>
          <View style={{ paddingBottom: 5}}>
            <Text style={styles.aboutHeader}>
              Currently set to
            </Text>
          </View>
          <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, paddingBottom: 10, paddingRight: 15, alignItems: 'center' }}
          onPress={() => {this.props.navigation.navigate('PROFILE_NEW_STATUS')}}
          >
            <View style={styles.about}>
              <Text style={{ fontSize: 19 }}>{about}</Text>
            </View>
            <View style={styles.editAboutIcon}>
              <View>
                <Icon name="border-color" size={22} color={colors.primary} />
              </View>
            </View>
          </TouchableOpacity>
        </Surface>
        <Surface style={{ marginHorizontal: 10, marginBottom:10, flex: 4, elevation: 3, borderRadius: 5 }}>
          <View style={{ paddingBottom: 5 }}>
            <Text style={styles.aboutHeader}>
              Select your About
            </Text>
          </View>
          <ScrollView
          showsVerticalScrollIndicator
          style={{ backgroundColor: 'white', borderRadius: 5 }}>
          <View style={{ paddingHorizontal: 5}}>
            <FlatList
              data={this.props.history}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => (<Separator width='100%' marginLeft='0%' />)}
              ListFooterComponent={this.renderFooter}
              renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.text}`}
                  rightTitle={Moment(item.created).format('d MMM')}
                  rightTitleStyle={{ fontWeight: '100', fontSize: 10 }}
                  titleStyle={{ fontSize: 16 }}
                  hideChevron
                  containerStyle={{ paddingTop: 20, paddingBottom: 20, borderBottomWidth: 0 }}
                  onPress={() => { this.setState({ 'about': item.text}); this.props.editAbout(this.state.about); }}
                />
              )
            }
              keyExtractor={item => `${item.id}`}
            />
            </View>
          </ScrollView>
        </Surface>
      </View>
    );
  }
}

export default withTheme(Status);


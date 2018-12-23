import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { material, robotoWeights } from 'react-native-typography';
import Separator from '@gringo/components/separator';
import { ListItem } from 'react-native-elements';
import { Button, Paragraph, Dialog, Portal, RadioButton, Text } from 'react-native-paper';
import { Styles } from '@gringo/styles/global';

class AccountChannelManagement extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Channel Management',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor: navigation.getParam('primaryColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: 'first',
    };
  }
 _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  renderHeader = () => <SearchBar placeholder="Search map settings" lightTheme round />;

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
      <View style={Styles.flatListWrapper}>
        <Portal>
          <Dialog
            visible={this.state.visible}
            onDismiss={this._hideDialog}
          >
            <Dialog.Title style={[material.body1, robotoWeights.thin,{ color: colors.primary }]}>Set Channel Privacy</Dialog.Title>
            <Dialog.Content>
              <RadioButton.Group
                onValueChange={value => this.setState({ value })}
                value={this.state.value}
              >
                <View>
                  <RadioButton value="first" />
                  <Text>First</Text>
                </View>
                <View>
                  <Text>Second</Text>
                  <RadioButton value="second" />
                </View>
              </RadioButton.Group>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <View style={{}} />
        <FlatList
          data={[
        {
          'id': '0',
          'name': 'Broadcasting',
          'icon': 'wifi-tethering',
          'switch': true,
          'switched': this.props.broadcasting,
          'onSwitch': !this.props.broadcasting,
        },
        {
          'id': '1',
          'name': 'Privacy',
          'subTitle': this.props.privacy.label,
          'icon': 'public',
          'onPress': this._showDialog,
        },
        {
          'id': '2',
          'name': 'Name',
          'subTitle': this.props.name,
          'icon': 'mode-edit',
          'onPress': () => this.setState({ editNameVisible: true }),
        },
        {
          'id': '3',
          'name': 'Subscribers',
          'icon': 'group',
          'onPress': () => { Y; },
        },
      ]}
          showsVerticalScrollIndicator={false}
          extraData={this.state}
          ItemSeparatorComponent={() => (<Separator />)}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={item.name}
                  titleStyle={Styles.flatListItemTitle}
                  rightTitle={item.subTitle}
                  rightTitleStyle={Styles.flatListItemRightTitle}
                  leftIcon={<Icon name={item.icon} size={23} color={colors.primary} />}
                  hideChevron
                  onPress={item.onPress}
                  switchButton={item.switch}
                  switched={item.switched}
                  switchOnTintColor={colors.primary}
                  switchThumbTintColor={colors.primary}
                  switchTintColor={colors.background}
                  containerStyle={Styles.flatListItemContainer}
                  onSwitch={() => { this.props.setBroadcasting(item.onSwitch); }}
                />
              )
            }
          keyExtractor={item => item.id}
        />

      </View>

    );
  }
}

export default withTheme(AccountChannelManagement);

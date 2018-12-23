import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { withNavigation } from 'react-navigation';
import { withTheme } from 'react-native-paper';

class App extends React.PureComponent {
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <Menu
        ref={this.setMenuRef}
        button={
          <TouchableOpacity
            onPress={this.showMenu}
            style={{
          flexDirection: 'row',
          margin: 5,
          borderRadius: 50,
          padding: 5,
          elevation: 3,
        }}
          >
            <Icon name="dots-horizontal" size={25} color={this.props.theme.colors.primary} />
          </TouchableOpacity>
        }
      >
        <MenuItem onPress={() => { this.hideMenu(); this.props.navigation.navigate('HELP'); }}>Help</MenuItem>
        <MenuDivider />
        <MenuItem onPress={() => { this.hideMenu(); this.props.navigation.navigate('DELETE_ACCOUNT'); }}>Delete Account</MenuItem>
      </Menu>
    );
  }
}

export default withNavigation(withTheme(App));

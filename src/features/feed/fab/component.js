import React, { PureComponent } from 'react';
import * as Animatable from 'react-native-animatable';
import { FAB, withTheme } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import styles from '@gringo/fab/styles';
import Portal from './portal';

class Fab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  settings = () => this.props.navigation.navigate('SETTINGS');
  broadcast = () => this.props.navigation.navigate('BROADCAST');
  timeline = () => this.props.navigation.navigate('TIMELINE');
  channels = () => this.props.navigation.navigate('CHANNELS');
  stateChange = ({ open }) => this.setState({ open });

  render() {
    const { colors } = this.props.theme;
    return (
      <Portal>

        <FAB.Group
          open={this.state.open}
          icon={this.state.open ? 'close' : 'person-pin-circle'}
          color={colors.primary}
          style={{ paddingBottom: 10 }}
          actions={[
            {
              icon: 'edit-location',
              color: colors.primary,
              // label: 'Cast',
              onPress: this.broadcast,
            },
            {
              icon: 'timeline',
              color: colors.primary,
              // label: 'Story',
              onPress:  this.timeline,
            },
            {
              icon: 'favorite',
              color: colors.primary,
              // label: 'Topics',
              onPress:  this.channels,
            },
            {
              icon: 'person',
              color: colors.primary,
              // label: 'Manage',
              onPress:  this.settings,
            },
            ]}
          onStateChange={this.stateChange}
        />
      </Portal>
    );
  }
}
export default withNavigation(withTheme(Fab));

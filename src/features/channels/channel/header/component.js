import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
  withTheme,
  Text,
  Button,
  Surface,
} from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { material, robotoWeights } from 'react-native-typography';
import FIcon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from './avatar/';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    flexDirection: 'row',
    elevation: 3,
  },
  summaryContainer: {
    paddingBottom: 0,
    paddingTop: 5,
    flex: 1,
  },
  summaryText: { fontWeight: '600', fontSize: 12 },
  userAddressRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  avatar: {
    height: 110,
    width: 110,
    borderTopLeftRadius: 5,
  },
});

class ChannelHeader extends Component {
  state = {
  }

  render() {
    const { colors } = this.props.theme;
    const {
      avatar,
      subscribers,
      broadcasts,
      subscribed,
    } = this.props;

    return (
      <Surface style={styles.container} >
        <View style={{}}>
          <Avatar avatar={avatar} />
        </View>
        <View
          style={styles.summaryContainer}
        >
          <View style={{ paddingHorizontal: 15, flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
                marginTop: 10,
                flex: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.background,
                  borderRadius: 40,
                  padding: 5,
                }}
              >
                <Icon name="subscriptions" size={15} color={colors.primary} />
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <Text style={[material.body2, robotoWeights.condensedBold]}>Subscriptions</Text>
                <Text style={[material.body2, robotoWeights.condensedBold]}>{subscribers}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
                flex: 1,
              }}
            >
              <View style={{ backgroundColor: colors.background, borderRadius: 40, padding: 5 }}>
                <FIcon name="radio" size={15} color={colors.primary} />
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <Text style={[material.body2, robotoWeights.condensedBold]}>Broadcasts</Text>
                <Text style={[material.body2, robotoWeights.condensedBold]}>{broadcasts}</Text>
              </View>
            </View>
          </View>

          <View style={styles.userAddressRow}>
            <Button icon="beenhere" style={{ flex: 1 }} mode="contained" onPress={() =>  {}}>
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </View>
        </View>
      </Surface>
    );
  }
}

export default withNavigation(withTheme(ChannelHeader));

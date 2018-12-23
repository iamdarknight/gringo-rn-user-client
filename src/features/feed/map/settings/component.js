import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import Separator from '@gringo/components/separator';
import Styles from '@gringo/styles/global';

class FeedMapSettings extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Map',
    tabBarIcon: <Icon name="map" size={25} color="#6200ea" />,
  });
  constructor(props) {
    super(props);
    this.state = {
      mapTypeDialogueVisible: false,
      mapTypeDialogueSelectedItem: this.props.mapType,
    };
  }

  componentDidMount() {
  }

  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    const {
      mapTypeDialogueVisible,
      mapTypeDialogueSelectedItem,
    } = this.state;
    const {
      liteMode,
      changeLiteMode,
      mapType,
      changeMapType,
      showsUserLocation,
      changeShowsLocation,
      showRecentLocations,
      changeShowsRecentLocations,
      showsTraffic,
      changeShowsTraffic,
      cachesMaps,
      changeCachesMaps,
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SinglePickerMaterialDialog
          title="Select map type"
          titleColor={colors.primary}
          colorAccent={colors.background}
          items={[
            {
              'label': 'Gringo',
              'value': 'standard',
            },
            {
              'label': 'Hybrid',
              'value': 'hybrid',
            },
            {
              'label': 'Terrain',
              'value': 'terrain',
            },
          ]}
          visible={mapTypeDialogueVisible}
          selectedItem={mapTypeDialogueSelectedItem}
          onCancel={() => this.setState({ mapTypeDialogueVisible: false })}
          onOk={(result) => {
            this.setState({ mapTypeDialogueVisible: false });
            changeMapType(result.selectedItem);
            this.setState({ mapTypeDialogueSelectedItem: result.selectedItem });
          }}
        />
        <FlatList
          data={[
            {
              'id': '0',
              'name': 'Show my Location',
              'icon': 'place',
              'switch': true,
              'switched': showsUserLocation,
              'onSwitch': () => changeShowsLocation(),
            },
            {
              'id': '1',
              'name': 'Show recent Locations',
              'icon': 'navigation',
              'switch': true,
              'switched': showRecentLocations,
              'onSwitch': () => changeShowsRecentLocations(),
            },
            {
              'id': '2',
              'name': 'Show Traffic',
              'switch': true,
              'switched': showsTraffic,
              'icon': 'traffic',
              'onSwitch': () => changeShowsTraffic(),
            },
            {
              'id': '4',
              'name': 'Lite Mode',
              'switch': true,
              'switched': liteMode,
              'onSwitch': () => changeLiteMode(),
              'icon': 'data-usage',
            },
            {
              'id': '5',
              'name': 'Map Type',
              'switch': false,
              'mode': mapType.label,
              'icon': 'map',
              'onPress': () => this.setState({ mapTypeDialogueVisible: true }),
            },
          ]}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.name}`}
                  titleStyle={{ paddingLeft: 20, fontSize: 16 }}
                  rightTitle={item.mode}
                  rightTitleStyle={Styles.flatListItemRightTitle}
                  leftIcon={<Icon name={item.icon} size={23} color={colors.primary} />}
                  hideChevron
                  switch={item.switch ? {
                    trackColor: colors.primary,
                    onValueChange: item.onSwitch,
                    thumbColor: colors.primary,
                    value: item.switched
                  }: null}
                  containerStyle={{ borderBottomWidth: 0, marginTop:15, marginBottom: 15 }}
                  onPress={item.onPress}
                />
              )
            }
          keyExtractor={item => item.id}
        />
      </View>

    );
  }
}

export default withTheme(FeedMapSettings);


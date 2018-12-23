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
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

class FeedTrackerSettings extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Tracker',
    tabBarIcon: <Icon name="gps-fixed" size={25} color="#6200ea" />,
  });

  constructor(props) {
    super(props);
    this.state = {
      trackerAccuracyDialogueVisible: false,
      trackerAccuracyDialogueSelectedItem: this.props.trackerAccuracy,
    };
  }

  componentDidMount() {
  }

  render() {
    const { colors } = this.props.theme;
    const {
      trackerAccuracyDialogueVisible,
      trackerAccuracyDialogueSelectedItem,
    } = this.state;
    const {
      trackerAccuracy,
      changeTrackerAccuracy,
      backgroundTracking,
      changeBackgroundTracking,
      batterySaver,
      changeBatterySaver,
      locationHistory,
      changeLocationHistory,
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.surface }}>
        <SinglePickerMaterialDialog
          title="Select tracker accuracy"
          titleColor={colors.primary}
          colorAccent={colors.background}
          items={[
            {
              'label': 'High',
              'value': BackgroundGeolocation.HIGH_ACCURACY,
            },
            {
              'label': 'Medium',
              'value': BackgroundGeolocation.MEDIUM_ACCURACY,
            },
            {
              'label': 'Low',
              'value': BackgroundGeolocation.LOW_ACCURACY,
            },
          ]}
          visible={trackerAccuracyDialogueVisible}
          selectedItem={trackerAccuracyDialogueSelectedItem}
          onCancel={() => this.setState({ trackerAccuracyDialogueVisible: false })}
          onOk={(result) => {
            this.setState({ trackerAccuracyDialogueVisible: false });
            changeTrackerAccuracy(result.selectedItem);
            this.setState({ trackerAccuracyDialogueSelectedItem: result.selectedItem });
          }}
        />
        <FlatList
          data={[
            {
              'id': '1',
              'name': 'Tracker Accuracy',
              'mode': trackerAccuracy.label,
              'icon': 'gps-fixed',
              'onPress': () => this.setState({ trackerAccuracyDialogueVisible: true }),
            },
            {
              'id': '2',
              'name': 'Background Tracking',
              'icon': 'track-changes',
              'switch': true,
              'switched': backgroundTracking,
              'onSwitch': () => changeBackgroundTracking(),
            },
            {
              'id': '3',
              'name': 'Battery Saver',
              'switch': true,
              'switched': batterySaver,
              'icon': 'battery-charging-full',
              'onSwitch': () => changeBatterySaver(),
            },
            {
              'id': '4',
              'name': 'Location History',
              'switch': true,
              'switched': locationHistory.tracking,
              'icon': 'edit-location',
              'onSwitch': () => changeLocationHistory(),
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
                  onSwitch={item.onSwitch}
                />
              )
            }
          keyExtractor={item => item.id}
        />
      </View>

    );
  }
}

export default withTheme(FeedTrackerSettings);


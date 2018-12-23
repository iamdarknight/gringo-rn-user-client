import React, { PureComponent } from 'react';
import { Alert, View } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

class FeedTracker extends PureComponent {
  componentDidMount() {
    const { colors } = this.props.theme;
    const {
      desiredAccuracy,
      stationaryRadius,
      distanceFilter,
      notificationTitle,
      notificationText,
      debug,
      startOnBoot,
      stopOnTerminate,
      locationProvider,
      interval,
      fastestInterval,
      activitiesInterval,
      stopOnStillActivity,
      notificationIconColor,
      url,
      syncUrl,
      syncThreshold,
      notificationIconLarge,
      notificationIconSmall,
      saveBatteryOnBackground,
      activityType,
      pauseLocationUpdates,
      maxLocations,
      startForeground,
      httpHeaders,
      // customize post properties
      postTemplate,
    } = this.props;
    BackgroundGeolocation.configure({
      desiredAccuracy: desiredAccuracy.value,
      stationaryRadius,
      distanceFilter,
      notificationTitle,
      notificationText,
      debug,
      startOnBoot,
      stopOnTerminate,
      locationProvider,
      interval,
      fastestInterval,
      activitiesInterval,
      stopOnStillActivity,
      notificationIconColor,
      url,
      syncUrl,
      syncThreshold,
      notificationIconLarge,
      notificationIconSmall,
      saveBatteryOnBackground,
      activityType,
      pauseLocationUpdates,
      maxLocations,
      startForeground,
      httpHeaders,
      //  customize post properties
      postTemplate,
    });

    BackgroundGeolocation.on('location', (location) => {
      // handle your locations here
      this.props.setLocationSet(true);
      this.props.setCurrentLocation(location);
      // to perform long running operation on iOS
      // you need to create background task
      BackgroundGeolocation.startTask((taskKey) => {
        // execute long running task
        // eg. ajax post location
        // IMPORTANT: task has to be ended by endTask
        BackgroundGeolocation.endTask(taskKey);
      });
    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      // handle stationary locations here
      // Actions.sendLocation(stationaryLocation);
    });

    BackgroundGeolocation.on('activity', (activity) => {
      // confidence :Number: Percentage indicating the likelihood user is performing this activity.
      // type :String :"IN_VEHICLE", "ON_BICYCLE", "ON_FOOT", "RUNNING", "STILL",
      //   "TILTING", "UNKNOWN", "WALKING"
    });

    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('start', () => {
      console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('stop', () => {
      console.log('[INFO] BackgroundGeolocation service has been stopped');
      this.props.setGpsSensorStatus(false);
      this.props.setLocationSet(false);
    });

    BackgroundGeolocation.on('authorization', (status) => {
      console.log(`[INFO] BackgroundGeolocation authorization status: ${status}`);
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        this.props.setGpsSensorAccess(0);
        // we need to set delay or otherwise alert may not be shown
        setTimeout(() =>
          Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [{
            text: 'Yes',
            onPress: () => BackgroundGeolocation.showAppSettings(),
          },
          {
            text: 'No',
            onPress: () => console.log('No Pressed'),
            style: 'cancel',
          },
          ]), 1000);
      }
    });

    BackgroundGeolocation.on('background', () => {
      console.log('[INFO] App is in background');
    });

    BackgroundGeolocation.on('foreground', () => {
      console.log('[INFO] App is in foreground');
    });

    // you can also just start without checking for status
    BackgroundGeolocation.start();

    BackgroundGeolocation.checkStatus((status) => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log(`[INFO] BackgroundGeolocation auth status: ${status.authorization}`);

      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start(); // triggers start on start event
      }
      this.props.setGpsSensorStatus(status.locationServicesEnabled);
      this.props.setGpsSensorAccess(status.authorization);
    });
  }

  componentWillUnmount() {
    // unregister all event listeners
    BackgroundGeolocation.events.forEach(event => BackgroundGeolocation.removeAllListeners(event));
  }

onClose = (data) => {
  // data = {type, title, message, action}
  // action means how the alert was closed.
  // returns: automatic, programmatic, tap, pan or cancel
}

render() {
  const { colors } = this.props.theme;
  return (
    <View />
  );
}
}
export default withTheme(FeedTracker);

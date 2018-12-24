import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import MapView, { AnimatedRegion, AnimatedMap, ProviderPropType, Marker } from 'react-native-maps';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import { withTheme } from 'react-native-paper';
import Broadcast from '@gringo/pins/broadcast';
import Search from '@gringo/pins/search';
import DirectMessages from '@gringo/pins/directMessages';
import ServiceCarts from '@gringo/pins/services';
import RecentLocations from '@gringo/pins/recentLocations';
import CurrentLocation from '@gringo/pins/currentLocation';
import Explorer from '@gringo/explorer';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class LoadingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      region: new AnimatedRegion(this.props.region),
      mapRegion: null,
    };
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  componentDidMount() {
    this.props.startWeatherSaga(this.props.region);
    BackgroundGeolocation.getLocations((locations) => {
      console.log(locations);
      this.setState({ locations });
    });
    // Set feed view to show all markers onLoad
    setTimeout(this.fitToMarkers, 15000);
  }

  componentWillUnmount() {
    this.props.stopWeatherSaga();
  }

  fitToMarkers = () => {
    this.map.getNode().fitToElements(true);
  }

  explore = (location) => {
    // move map to current location
    this.map.getNode().animateCamera(
      {
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        pitch: 4,
        heading: 9,

        // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
        altitude: 5000,

        // Only when using Google Maps.
        zoom: 12,
      }, 3000);
  }

  render() {
    const {
      textSearchResponse,
      suggestedPlace,
      searching,
      directMessages,
      showDirectMessages,
      showRecentLocations,
      currentLocation,
      showsUserLocation,
      feed,
      carts,
    } = this.props;

    const { colors } = this.props.theme;
    const { locations } = this.state;

    const mapStyle = [
      {
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#ffffff',
          },
        ],
      },
      {
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#691898',
          },
        ],
      },
      {
        'featureType': 'administrative.locality',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#691898',
          },
        ],
      },
      {
        'featureType': 'poi',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#278b07',
          },
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#ffda09',
          },
        ],
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#691898',
          },
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#691898',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#ffffff',
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#c9bbd5',
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#74598c',
          },
        ],
      },
      {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#624b76',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'stylers': [
          {
            'color': '#fee078',
          },
          {
            'visibility': 'on',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e4deeb',
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#691898',
          },
        ],
      },
      {
        'featureType': 'transit',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'transit',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575',
          },
        ],
      },
      {
        'featureType': 'transit.station.airport',
        'stylers': [
          {
            'color': '#ff353a',
          },
          {
            'visibility': 'on',
          },
          {
            'weight': 5.5,
          },
        ],
      },
      {
        'featureType': 'transit.station.airport',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#691898',
          },
        ],
      },
      {
        'featureType': 'transit.station.airport',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#ffffff',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#4285f4',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#ffffff',
          },
        ],
      },
    ];

    return (
      <View style={styles.container}>
        <MapView.Animated
          ref={ref => this.map = ref}
          /*
          onPress= coordinate = () => {}
          onRegionChange= Region = () => {} <---- Update markers
          onRegionComplete= Region = () => {} <---- Update markers
          onMapReady={} <---- Update markers
          onUserLocationChange= coordinate = () => {}
          onPanDrag= coordinate = () => {} <---- Update markers
          onPoiClick= coordinate, position, placeId, name = () => {}
          onLongPress= coordinate = ()=> {}
          onMarkerPress={}
          onMarkerSelect={}
          onMarkerDeselect={}
          onCalloutPress={}
          onMarkerDragStart= coordinate, position = () => {}
          onMarkerDrag= coordinate, position = () => {} <---- Called continously until drag ends
          onMarkerDragEnd= coordinate, position = () => {}
          onPoiClick={}
          */
          // liteMode={this.props.liteMode}
          // key={`map_${i}`}
          onPress={this.props.onMapPress}
          // region={this.state.region}
          camera={this.props.camera}
          onRegionChange={region => this.onRegionChange(region)}
          onRegionChangeComplete={(region) => {
            // Alert feed of new map position
            this.props.startWeatherSaga(region);
            this.props.setMapViewRegion(region);
          }}
          // initialRegion={this.state.region}
          provider={this.props.provider}
          style={styles.map}
          // mapPadding={EdgePadding}
          loadingBackgroundColor={this.props.loadingBackgroundColor}
          loadingIndicatorColor={this.props.loadingIndicatorColor}
          // showsUserLocation={this.props.showsUserLocation} : Enable for built in map location RNMaps
          followsUserLocation={this.props.followsUserLocation}
          showsMyLocationButton={this.props.showsMyLocationButton}
          mapType={this.props.mapType.value}
          userLocationAnnotationTitle={this.props.userLocationAnnotationTitle}
          showsPointsOfInterest={this.props.showsPointsOfInterest}
          showsCompass={this.props.showsCompass}
          showsScale={this.props.showsScale}
          showsBuildings={this.props.showsBuildings}
          showsTraffic={this.props.showsTraffic}
          showsIndoors={this.props.showsIndoors}
          showsIndoorLevelPicker={this.props.showsIndoorLevelPicker}
          zoomEnabled={this.props.zoomEnabled}
          zoomControlEnabled={this.props.zoomControlEnabled}
          minZoomLevel={this.props.minZoomLevel}
          maxZoomLevel={this.props.maxZoomLevel}
          rotateEnabled={this.props.rotateEnabled}
          scrollEnabled={this.props.scrollEnabled}
          pitchEnabled={this.props.pitchEnabled}
          toolbarEnabled={this.props.toolbarEnabled}
          cacheEnabled={this.props.cacheEnabled}
          loadingEnabled={this.props.loadingEnabled}
          moveOnMarkerPress={this.props.moveOnMarkerPress}
          customMapStyle={mapStyle}
        >
          <Broadcast feed={feed} />

          <Search searching={searching} suggestedPlace={suggestedPlace} currentLocation={currentLocation} textSearchResponse={textSearchResponse} />

          <DirectMessages showDirectMessages={showDirectMessages} directMessages={directMessages} />

          <ServiceCarts carts={carts} />

          <RecentLocations showRecentLocations={showRecentLocations} locations={locations} />

          <CurrentLocation showsUserLocation={showsUserLocation} location={currentLocation} />

        </MapView.Animated>

        <View style={{ position: 'absolute', bottom: 26, left: 15 }}>
          {/* Gringo Explore fab */}
          <Explorer onPress={this.fitToMarkers} onLongPress={this.explore} />
        </View>

      </View>
    );
  }
}

LoadingMap.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});

export default withTheme(LoadingMap);

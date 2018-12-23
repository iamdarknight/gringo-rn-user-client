import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import MapView, { ProviderPropType, Marker, Callout } from 'react-native-maps';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import { withTheme } from 'react-native-paper';

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
    };
  }

  componentDidMount() {
    this.props.startWeatherSaga(this.props.region);
    BackgroundGeolocation.getLocations((locations) => {
      console.log(locations);
      this.setState({ locations });
    });
  }

  componentWillUnmount() {
    this.props.stopWeatherSaga();
  }

  marker = () => {
    if (this.props.marker === 'whatshot') {
      return require('../../pins/assets/whatshot.png');
    } else if (this.props.marker === 'cart') {
      return require('../../pins/assets/cart.png');
    }
    if(this.props.marker === 'directMessage') {
      return require('../../pins/assets/directMessages.png');
    }
  }


  render() {
    const {
      textSearchResponse,
      searching,
      directMessages,
      showDirectMessages,
      showRecentLocations,
      feed,
      region,
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
        <MapView
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
          onRegionChangeComplete={(region) => { }}
          // initialRegion={this.state.region}
          provider={this.props.provider}
          style={styles.map}
          region={region}
          // mapPadding={EdgePadding}
          loadingBackgroundColor={this.props.loadingBackgroundColor}
          loadingIndicatorColor={this.props.loadingIndicatorColor}
          showsUserLocation={false}
          followsUserLocation={false}
          showsMyLocationButton={false}
          mapType={this.props.mapType.value}
          userLocationAnnotationTitle={this.props.userLocationAnnotationTitle}
          showsPointsOfInterest={true}
          showsCompass={false}
          showsScale={false}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          zoomEnabled={true}
          zoomControlEnabled={false}
          minZoomLevel={this.props.minZoomLevel}
          maxZoomLevel={this.props.maxZoomLevel}
          rotateEnabled={this.props.rotateEnabled}
          scrollEnabled={this.props.scrollEnabled}
          pitchEnabled={this.props.pitchEnabled}
          toolbarEnabled={false}
          cacheEnabled={this.props.cacheEnabled}
          loadingEnabled={this.props.loadingEnabled}
          moveOnMarkerPress={this.props.moveOnMarkerPress}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{ latitude: region.latitude, longitude: region.longitude }}
            image={this.marker()}
            draggable
            title={this.props.description}
          />
        </MapView>

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

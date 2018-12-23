import React, { Component } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Dimensions } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import RNGooglePlaces from 'react-native-google-places';
import MapViewDirections from 'react-native-maps-directions';
import StarRating from 'react-native-star-rating';
import MarkerIcon from '../assets/searchResults.png';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDirectionsTo: null,
      placeInfo: null,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  generateBillBoard = (placeID) => {
    const { placeInfo } = this.state;
    if (placeInfo !== null) {
      console.log(placeInfo);
      if (placeInfo.placeID !== placeID) {
        this.setState({ placeInfo: null });
        RNGooglePlaces.lookUpPlaceByID(placeID.toString())
          .then((results) => {
            this.setState({ placeInfo: results });
            this.refs[placeID].redraw(); // Could be cause of loop request
          })
          .catch(error => console.log(error.message));
      }
    } else {
      RNGooglePlaces.lookUpPlaceByID(placeID.toString())
        .then((results) => {
          this.setState({ placeInfo: results });
          this.refs[placeID].redraw(); // Could be cause of loop request
        })
        .catch(error => console.log(error.message));
    }
  }

  generateDirections = (destination) => {
    const { latitude, longitude } = this.props.currentLocation;
    return (
      <MapViewDirections
        origin={{
          latitude,
          longitude,
          }}
        destination={destination}
        strokeWidth={3}
        strokeColor="hotpink"
        apikey="AIzaSyA05HkBJddTEsc7x960AXP_OsLjFiWPeb8"
      />
    );
  }

  render() {
    const {
      searching,
      suggestedPlace,
      currentLocation,
      textSearchResponse,
    } = this.props;
    const { colors } = this.props.theme;
    const { placeInfo } = this.state;
    return (
      <View>
        {
          searching && suggestedPlace !== null ?
            <View>
              <Marker
                ref={suggestedPlace.place.placeID}
                coordinate={{
                  latitude: suggestedPlace.place.latitude,
                  longitude: suggestedPlace.place.longitude,
                }}
                image={MarkerIcon}
                onPress={() => this.generateBillBoard(suggestedPlace.place.placeID)}
              >
                <Callout onPress={() => { this.setState({ showDirectionsTo: 'selected' }); }} >
                  <View style={{ width: Screen.width / 3 }}>
                    <Text>{suggestedPlace.place.name}</Text>
                    <Text>{suggestedPlace.place.address}</Text>
                    {
                      suggestedPlace.place.rating ?
                        <StarRating
                          disabled
                          starSize={15}
                          emptyStarColor={colors.surface}
                          fullStarColor={colors.error}
                          rating={suggestedPlace.place.rating}
                          // selectedStar={(rating) => this.onStarRatingPress(rating)}
                        /> :
                      null
                    }
                    <View styles={{ flexDirection: 'row' }}>
                      {suggestedPlace.place.types ? suggestedPlace.place.types.map(type => <Text>{type}</Text>) : null}
                    </View>
                  </View>
                </Callout>
              </Marker>
              {
                this.state.showDirectionsTo === 'selected' ?
                this.generateDirections({
                    latitude: suggestedPlace.place.latitude,
                    longitude: suggestedPlace.place.longitude,
                  }) : null
              }
            </View> :
          null
        }

        {
          searching ? textSearchResponse.map(marker => (
            <View key={marker.place_id} >
              <Marker
                ref={marker.place_id}
                coordinate={{
                  latitude: marker.geometry.location.lat,
                  longitude: marker.geometry.location.lng,
                }}
                title={placeInfo !== null ? null : marker.name}
                description={placeInfo !== null ? null : marker.formatted_address}
                image={MarkerIcon}
                onPress={() => this.generateBillBoard(marker.place_id)}
              >
                <Callout onPress={() => this.setState({ showDirectionsTo: marker.place_id })} >
                  { placeInfo !== null && placeInfo.placeID === marker.place_id ?
                    <View style={{ width: Screen.width / 3 }}>
                      <Text>{placeInfo.name}</Text>
                      <Text>{placeInfo.address}</Text>
                      {
                      placeInfo.rating ?
                        <StarRating
                          disabled
                          starSize={15}
                          emptyStarColor={colors.surface}
                          fullStarColor={colors.error}
                          rating={placeInfo.rating}
                          // selectedStar={(rating) => this.onStarRatingPress(rating)}
                        /> :
                      null
                    }
                      <View styles={{ flexDirection: 'row' }}>
                        {placeInfo.types ? placeInfo.types.map((type, index) => <Text key={index}>{type}</Text>) : null}
                      </View>
                    </View>
                : null
                }
                </Callout>
              </Marker>

              {
                this.state.showDirectionsTo === marker.place_id ?
                this.generateDirections({
                    latitude: marker.geometry.location.lat,
                    longitude: marker.geometry.location.lng,
                  }) : null
              }
            </View>
          )) : null
        }

      </View>
    );
  }
}


export default withTheme(SearchResult);

// @flow
import React, { Component } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Image } from 'react-native';
import moment from 'moment';
import { material, robotoWeights, webWeights } from 'react-native-typography';
import { Text } from 'react-native-paper';
import { MarkerImage } from '../assets/recentLocations.png';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { showRecentLocations, locations } = this.props;
    return (
      showRecentLocations ? locations.map((marker) => {
        if (marker.accuracy < 500) {
          return (
            <Marker
              coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
              key={marker.id}
              image={MarkerImage}
            >
              <Callout tooltip  style={{}}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: this.props.userAvatar }} />
                  <Text style={[material.caption, robotoWeights.condensedBold]}>{`@${moment(marker.time).fromNow()}`}</Text>
                </View>
              </Callout>
            </Marker>
          ); }
      }) : null
    );
  }
}


export default SearchResult;

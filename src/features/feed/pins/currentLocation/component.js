// @flow
import React, { Component } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Image } from 'react-native';
import { Card, CardContent, Paragraph, Title, Text } from 'react-native-paper';
import Icon from '../assets/currentLocation.png';

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
    const { location, showsUserLocation } = this.props;
    return (
      
        showsUserLocation ? 
          <Marker
            coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
            image={Icon}
          >
            <Callout tooltip  style={{ width: 40, height: 40}}>
              <View style={{ width: 40, height: 40, borderRadius: 20, }}>
                <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: this.props.userAvatar }} />
              </View>
            </Callout>
          </Marker> : null
      
    );
  }
}


export default SearchResult;

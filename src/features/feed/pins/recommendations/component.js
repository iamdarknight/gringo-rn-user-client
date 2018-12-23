import React, { Component } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardContent, Paragraph, Title, Text } from 'react-native-paper';

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
    const { textSearchResponse } = this.props;
    return (
      textSearchResponse.map((result, index)=> (
      <Marker
        coordinate={result.geometry.location}
        image={require('')}
      >
       
        <Callout/>
      </Marker>
      ))
    );
  }
}


export default SearchResult;

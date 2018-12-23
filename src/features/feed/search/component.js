// @flow
import * as React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Text, Surface, withTheme, Searchbar, TouchableRipple, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';
import { material, robotoWeights } from 'react-native-typography';
import View from '@gringo/components/view/';
import Separator from '@gringo/components/separator';
import { List, ListItem, Slider } from 'react-native-elements';
import Styles from '../styles';

class SearchBar extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      firstQuery: '',
      searchBarRadius: 5,
      searchToolBar: false,
      suggestions: [],
      showSuggestions: true,
      visible: false,
      value: 500,
    };
  }

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  componentDidMount() {
    // setTimeout(() => { this.searchbar.focus(); }, 0);
    // setTimeout(() => { while(!this.seachbar.isFocused()){this.setState({ searching: false }); }}, 0)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }


  goToLocation = (placeID: string) => {
    RNGooglePlaces.lookUpPlaceByID(placeID)
      .then((place) => {
        console.log(place);
        this.setState({ showSuggestions: false });
        this.props.setMapRegion(place);
        this.props.viewLocation(place);
        // this.props.setSearching(!this.props.searching);
      })
      .catch((error) => { console.log(error.message); });
  }

  getLocationSuggestions = (query: string) => {
    const { mapViewRegion } = this.props;
    RNGooglePlaces.getAutocompletePredictions(query, {
      latitude: mapViewRegion.latitude,
      longitude: mapViewRegion.longitude,
      radius: 5,
      country: 'ZW',
    })
      .then((suggestions) => {
        this.setState({
          suggestions,
        });
        this.setState({ showSuggestions: true });
        console.log(suggestions);
      })
      .catch(error => console.log(error.message));
  }

  onSubmitEditing = () => {
    const { firstQuery } = this.state;
    const { mapViewRegion } = this.props;
    this.setState({ showSuggestions: false });
    this.props.search(firstQuery, mapViewRegion);
  }

  onChangeText = (text) => {
    this.text = text;
    this.setState({ firstQuery: text });
    clearTimeout(this.timeout); // clears the old timer
    this.timeout = setTimeout(() => { this.getLocationSuggestions(text); }, 1500);
  }

  onIconPress = () => {
    if (this.state.searchToolBar) {
      this.setState({ searchToolBar: false });
      this.setState({ searchBarRadius: 5 });
    } else {
      this.setState({ searchToolBar: true });
      this.setState({ searchBarRadius: 0 });
    }
  }

  render(): React.Element<*> {
    const { firstQuery } = this.state;
    const { colors } = this.props.theme;
    return (
      <View>
        <Animatable.View
          animation="zoomIn"
          easing="ease-in-out"
          direction="alternate"
          duration={700}
          useNativeDriver
        >
          <Searchbar
            ref={c => this.searchbar = c}
            onSubmitEditing={this.onSubmitEditing}
            placeholder="Search"
            onChangeText={this.onChangeText}
            value={firstQuery}
            style={{
              borderRadius: 5,
              borderBottomLeftRadius: this.state.searchBarRadius,
              borderBottomRightRadius: this.state.searchBarRadius,
              elevation: 3,
              margin: 10,
              marginBottom: 0,
            }}
            onIconPress={this.onIconPress}
          />

        </Animatable.View>

        <View hide={!this.state.searchToolBar} >
          <Animatable.View
            animation="fadeInRight"
            easing="ease-in-out"
            direction="alternate"
            useNativeDriver
            style={{ marginHorizontal: 10 }}
          >
            <Surface style={Styles.searchToolBar}>
              <View
                style={{
                  padding: 5,
                  flexDirection: 'row',
                }}
              >
                <Text style={[material.body1, robotoWeights.condensedBold, { color: colors.backdrop  }]}>Filters</Text>
                <TouchableRipple onPress={this._showDialog}>
                  <Text style={[material.button, robotoWeights.condensed, { color: colors.primary, marginHorizontal: 5  }]}>RADIUS</Text>
                </TouchableRipple>
                <Portal>
                  <Dialog
                    visible={this.state.visible}
                    onDismiss={this._hideDialog}
                  >
                    <Dialog.Title>Set results radius</Dialog.Title>
                    <Dialog.Content>
                      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                        <Slider
                          value={this.state.value}
                          onValueChange={value => this.setState({ value })}
                          animateTransitions
                          maximumTrackTintColor={colors.error}
                          maximumValue={50000}
                          minimumTrackTintColor={colors.background}
                          minimumValue={100}
                          step={500}
                          style={{}}
                          trackStyle={{}}
                          thumbStyle={{}}
                          thumbTintColor={colors.primary}
                        />
                        <Text style={[material.body1, robotoWeights.condensedBold, { color: colors.backdrop }]}>{this.state.value} meters</Text>
                      </View>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button onPress={this._hideDialog}>Done</Button>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
                <TouchableRipple onPress={() => {}}>
                  <Text style={[material.button, robotoWeights.condensed, { color: colors.primary, marginHorizontal: 5 }]}>TYPE</Text>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <Text style={[material.button, robotoWeights.condensed, { color: colors.primary, marginHorizontal: 5 }]}>PRICING</Text>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <Text style={[material.button, robotoWeights.condensed, { color: colors.primary, marginHorizontal: 5 }]}>OPEN</Text>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                  <Text style={[material.button, robotoWeights.condensed, { color: colors.primary, marginHorizontal: 5 }]}>SEE MORE</Text>
                </TouchableRipple>
              </View>
            </Surface>

          </Animatable.View>
        </View>

        <View hide={!this.state.showSuggestions}>
          <ScrollView style={{  }}>
            <FlatList
              style={{
 backgroundColor: colors.surface, margin: 10, elevation: 3, borderRadius: 5,
}}
              data={this.state.suggestions}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                (
                  <ListItem
                    title={`${item.primaryText}`}
                    subtitle={`${item.fullText}`}
                    subtitleStyle={[material.caption, robotoWeights.condensedBold]}
                    titleStyle={[material.body1, robotoWeights.thin]}
                    hideChevron
                    containerStyle={{
 borderBottomWidth: 0, paddingTop: 10, paddingBottom: 10, marginVertical: 10,
}}
                    onPress={() => { this.goToLocation(item.placeID); }}
                    leftAvatar={{
                      source: 'https://www.uteca.edu.mx/wp-content/uploads/2018/09/google-maps-1.jpg' && { uri: 'https://www.uteca.edu.mx/wp-content/uploads/2018/09/google-maps-1.jpg' },
                    }}
                  />
                )
              }
              keyExtractor={item => item.placeID}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default withTheme(SearchBar);


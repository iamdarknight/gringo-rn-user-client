import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import RNGooglePlaces from 'react-native-google-places';
import Separator from '@gringo/components/separator';
import { Styles } from '@gringo/styles/global';

class BillingAddress extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Address',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerTintColor:  navigation.getParam('primaryColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backgroundColor': this.props.theme.colors.accent });
  }

  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    return (
      <View style={Styles.flatListWrapper}>
        <FlatList
          data={this.props.billingAddress}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={item.name}
                  subtitle={item.placeInfo.formatted_address || 'Add'}
                  subtitleStyle={Styles.flatListItemSubTitle}
                  titleStyle={Styles.flatListItemTitle}
                  leftIcon={<Icon name={item.icon} size={23} color={colors.primary} />}
                  hideChevron
                  containerStyle={Styles.flatListItemContainer}
                  onPress={() =>
                    RNGooglePlaces.openPlacePickerModal({
                        radius: 80,
                        latitude: item.place.latitude || null,
                        longitude: item.place.longitude || null,
                    })
                    .then((place) => { this.props.editAddress({ id: item.id, place }); })
                    .catch(error => console.log(error.message))
                  }
                />
              )
            }
          keyExtractor={item => item.id}
        />
      </View>

    );
  }
}

export default withTheme(BillingAddress);


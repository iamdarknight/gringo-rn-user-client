import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import Separator from '@gringo/components/separator';
import { Styles } from '@gringo/styles/global';

class AccountBilling extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Billing',
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
          data={this.props.billingDetails}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.name}`}
                  titleStyle={Styles.flatListItemTitle}
                  leftIcon={<Icon name={item.icon} size={23} color={colors.primary} />}
                  hideChevron
                  containerStyle={Styles.flatListItemContainer}
                  onPress={() => { this.props.navigation.navigate(item.screen); }}
                />
              )
            }
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default withTheme(AccountBilling);


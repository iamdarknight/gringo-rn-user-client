import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import Separator from '@gringo/components/separator';
import { Styles } from '@gringo/styles/global';

class BillingPaymentGateways extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Payment Gateways',
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
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  // Display Flag Form in Modal depending on this.state.flag
  render() {
    const { colors } = this.props.theme;
    return (
      <View style={Styles.flatListWrapper}>
        <FlatList
          data={this.props.billingPaymentGateways}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          ListFooterComponent={this.renderFooter}
          removeClippedSubviews={false}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.name}`}
                  titleStyle={[Styles.flatListItemTitle]}
                  rightTitle={item.status ? 'connected' : 'connect'}
                  rightTitleStyle={Styles.flatListItemRightTitle}
                  leftIcon={<View style={Styles.flatListItemIconFix}><Icon name={item.icon} size={23} color={colors.primary} /></View>}
                  hideChevron
                  containerStyle={Styles.flatListItemContainer}
                  onPress={item.route}
                />
                )
            }
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default withTheme(BillingPaymentGateways);


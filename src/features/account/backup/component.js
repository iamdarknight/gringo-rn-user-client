import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem } from 'react-native-elements';
import Separator from '@gringo/components/separator';
import { Styles } from '@gringo/styles/global';

class AccountBackup extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation, screenProps }) =>  ({
    title: 'Backup',
    headerStyle: {
      backgroundColor: navigation.getParam('backgroundColor'),
    },
    headerRight: (<Text style={Styles.headerRightText} onPress={() => { }}>SYNC</Text>),
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
          data={this.props.accounts}
          ItemSeparatorComponent={() => (<Separator />)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
              (
                <ListItem
                  roundAvatar
                  title={`${item.name}`}
                  titleStyle={Styles.flatListItemTitle}
                  rightTitle={item.status ? 'connected' : 'connect'}
                  rightTitleStyle={Styles.flatListItemRightTitle}
                  leftIcon={<Icon name={item.icon} size={23} color={colors.primary} />}
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

export default withTheme(AccountBackup);


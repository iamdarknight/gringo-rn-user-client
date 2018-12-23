import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  TouchableRipple,
  Text,
  withTheme,
} from 'react-native-paper';
import { material, robotoWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';

class Browser extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '',
    headerStyle: {
      backgroundColor: navigation.getParam('accentColor'),
    },
    headerRight:
      (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={this.showMenu}
            style={{
          flexDirection: 'row',
          margin: 5,
          borderRadius: 50,
          padding: 5,
          elevation: 3,
        }}
          >
            <Icon name="more-horiz" size={25}  color={navigation.getParam('primaryColor')} />
          </TouchableOpacity>
        </View>
      ),
    headerLeft:
      (
        <TouchableRipple
          style={{
          padding: 9,
          marginLeft: 8,
        }}
          onPress={() => navigation.navigate('FEED')}
        >
          <Icon name="close" size={25} color={navigation.getParam('primaryColor')} />

        </TouchableRipple>
      ),
    headerTintColor: navigation.getParam('accentColor'),
  });

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({ 'primaryColor': this.props.theme.colors.primary });
    this.props.navigation.setParams({ 'backdropColor': this.props.theme.colors.backdrop });
    this.props.navigation.setParams({ 'accentColor': this.props.theme.colors.accent });
    this.props.navigation.setParams({ 'background': this.props.theme.colors.background });
  }

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={{ flex:1 }}>
        <WebView
          source={{ uri: this.props.navigation.getParam('link') }}
          style={{  }}
          onError={() => {}}
          onLoad={() => {}}
          onLoadEnd={() => {}}
          onLoadStart={() => {}}
          renderError={() => (<View style={{ backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Icon name="error-outline" size={30} color={colors.background} style={{ padding: 5}}/>
              <Text>Connection Error</Text>
            </View>
            <View style={{ paddingHorizontal: 50 }}>
              <Text style={[material.body2, robotoWeights.light, {  }]}>There seems to be a problem with opening this page. Please reload to try again!</Text>
            </View>

                              </View>)}
          renderLoading={() =>
            (<Progress.Bar
              progress={this.state.progress}
              color={this.props.theme.colors.primary}
              unfilledColor={this.props.theme.colors.accent}
              borderWidth={0}
              width={null}
              height={2}
              borderRadius={0}
              useNativeDriver={true}
              animationConfig={{ bounciness: 3 }}
              animationType="spring"
            />)}
          startInLoadingState
          allowsBackForwardNavigationGestures
          onLoadProgress={e => this.setState({ progress: e.nativeEvent.progress })}
        />
      </View>
    );
  }
}

export default withTheme(Browser);

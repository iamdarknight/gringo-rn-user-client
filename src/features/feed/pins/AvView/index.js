import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import { material, webWeights } from 'react-native-typography';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withTheme, Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import View from '@gringo/components/view/';
import ActivityIndicator from '../assets/animations/material_wave_loading.json';


const { width } = Dimensions.get('window');

class AvView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: true,
      paused: true,
      skin: 'custom',
      ignoreSilentSwitch: null,
      isBuffering: false,
      imageHeight: 0,
    };
  }

  componentWillMount() {
    if (this.props.type === 'image') {
      Image.getSize(this.props.source, (w, h) => {
        this.setState({ imageHeight: Math.floor(h * (width / w)) });
      });
    }
  }

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  }

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  }

  onBuffer = ({ isBuffering }: { isBuffering: boolean }) => {
    this.setState({ isBuffering });
  }
  onPause = () => { this.setState({ paused: !this.state.paused }); }

  render() {
    const { colors } = this.props.theme;

    const {
      imageHeight,
      rate,
      paused,
      volume,
      muted,
      controls,
      ignoreSilentSwitch,
      isBuffering,
      currentTime,
      duration,
    } = this.state;

    const {
      type,
      source,
    } = this.props;

    if (type === 'image') {
      return (
        <FastImage
          style={{ width, height: imageHeight }}
          source={{
              uri: source,
              headers:{ Authorization: 'someAuthToken' },
              priority: FastImage.priority.high,
              cache: FastImage.cacheControl.immutable,
            }}
          resizeMode={FastImage.resizeMode.contain}
        />
      );
    }

    return (
      <TouchableOpacity
        onPress={this.onPause}
        activeOpacity={0.8}
        style={{ width, height: width * 3 / 4 }}
      >
        <Video
          source={{ uri: this.props.source }}
          style={{ width, height: width * 3 / 4 }}
          rate={rate}
          controls={controls}
          paused={paused}
          volume={volume}
          muted={muted}
          ignoreSilentSwitch={ignoreSilentSwitch}
          resizeMode="cover"
          onLoad={this.onLoad}
          onBuffer={this.onBuffer}
          onProgress={this.onProgress}
          onEnd={() => null}
          repeat={true}
        />
        <View
          style={{
          position: 'absolute',
          left: 2,
          top: 5,
          backgroundColor: colors.primary,
          padding: 5,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          {
            isBuffering ?
              <LottieView
                source={ActivityIndicator}
                autoPlay
                loop
                style={{ width: 20 }}
              /> :
              <Icon
                name={paused ? 'pause' : 'play-arrow'}
                size={20}
                color={colors.surface}
              />
          }
        </View>
        <View
          style={{
          position: 'absolute',
          left: 5,
          bottom: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Text
            style={[material.caption, webWeights.ultraLight, { color: colors.surface }]}
          >
            {currentTime.toFixed(0)}s/{duration.toFixed(0)}s
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default withTheme(AvView);

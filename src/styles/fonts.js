// @flow
import { Platform } from 'react-native';

export type Font = string;

export type Fonts = {
  regular: Font,
  medium: Font,
  light: Font,
  thin: Font,
}

const isIOS: boolean = Platform.OS === 'ios';

const fonts: Fonts = {
  regular: isIOS ? 'Helvetica Neue' : 'roboto',
  medium: isIOS ? 'HelveticaNeue-Medium' : 'roboto-medium',
  light: isIOS ? 'HelveticaNeue-Light' : 'roboto-light',
  thin: isIOS ? 'HelveticaNeue-Thin' : 'roboto-thin',
};

export default fonts;

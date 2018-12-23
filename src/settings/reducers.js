// ACCOUNT REDUCERS
import * as reduce from './types';
import color from 'color';
import {
  indigo50,
  indigo800,
  black,
  white,
  redA400,
  translucent,
  indigoA200,
} from '@gringo/styles/colors';
import fonts from '@gringo/styles/fonts';

const initialState = {
  theme: {
    dark: false,
    roundness: 2,
    colors: {
      primary: indigo800,
      accent: white,
      secondary: indigoA200,
      background: indigo50,
      paper: white,
      error: redA400,
      text: black,
      translucent,
      disabled: color(black)
        .alpha(0.26)
        .rgb()
        .string(),
      placeholder: color(black)
        .alpha(0.38)
        .rgb()
        .string(),
    },
    fonts,
  },
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default settings;

// @flow
export type DST = {
  country: string,
  sunrise: number,
  sunset: number,
};

export type Coord = {
  lon: number,
  lat: number,
};

export type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string,
};

export type MainWeather = {
  temp: number,
  humidity: number,
  pressure: number,
  temp_min: number,
  temp_max: number,
};

export type Action = {
  type: string;
  payload: {
    active: boolean
  }
};

export type Theme =  {
  theme: string,
  roundness: number,
  colors: {
    primary: string,
    accent: string,
    secondary: string,
    background: string,
    paper: string,
    error: string,
    text: string,
    translucent: string,
    disabled: string,
    placeholder: string,
  fonts: Object,
};
}

export type Dispatch = (action: Action) => void;

export type Props = {|
  startSaga: () => void,
  stopSaga: () => void,
  dst: DST,
  theme: Theme,
  id: number,
  description: string,
  temperature: number,
|}

export type State = {
  +coord: Coord,
  +dst: DST,
  +weather: Weather,
  main: MainWeather,
  wind: {
    speed: number,
    deg: number,
  },
  rain: {
    '3h': number,
  },
  clouds: {
    all: number,
  },
  place: string,
  fetching: boolean,
  error: ?Object,
};

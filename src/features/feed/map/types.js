// @flow
export type Action = {
  type: string;
  payload: Object
};

export type Dispatch = (action: Action) => void;

export type Props = {|
  startSaga: () => void,
  stopSaga: () => void
|};

export type Region = {
  latitude: Number,
  longitude: Number,
  latitudeDelta: Number,
  longitudeDelta: Number,
}

export type LatLng = {
  latitude: Number,
  longitude: Number,
}

export type Location = {
  latitude: Number,
  longitude: Number,
  altitude: Number,
  timestamp: Number, //Milliseconds since Unix epoch
  accuracy: Number,
  altitudeAccuracy: Number,
  speed: Number,
}

export type Point = {
  x: Number,
  y: Number,
}

// export enum MapType : String = {
//   "standard",
//   "satellite",
//   "hybrid",
//   "terrain" //Android only
// }

export type EdgePadding = {
  top: Number,
  right: Number,
  bottom: Number,
  left: Number
}
export type EdgeInsets = {
  top: Number,
  left: Number,
  bottom: Number,
  right: Number
}
export type Marker = {
  id: String,
  coordinate: LatLng,
  title: String,
  description: String
}
export type KmlContainer = {
  markers: [Marker]
}
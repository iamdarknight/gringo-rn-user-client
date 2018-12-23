// @flow
export type Action = {
  type: string;
  payload: {
    active: boolean
  }
};

export type Dispatch = (action: Action) => void;

export type Props = {|
  startSaga: () => void,
  stopSaga: () => void
|};
export type Location = {
    id: number,
    provider: string,
    locationProvider: number,
    time: number,
    latitude: number,
    longitude: number,
    accuracy: number,
    speed: number,
    altitude: number,
    bearing: number,
    isFromMockProvider: boolean,
    mockLocationsEnabled: boolean
  };
export type RecentLocations = {
  tracking: boolean,
  locations: Array<Location>
};
export type Activity =  {
    confidence: number,
    type: string
  };
export type Headers = Object;
export type Template ={
    lat: string,
    lon: string,
    foo: string // you can also add your own properties
  };
export type Accuracy = {
    label: string,
    value: string
  };
export type State = {
  recentLocations: RecentLocations,
  currentLocation: Location,
  currentActivity: Activity,
  desiredAccuracy: Accuracy,
  stationaryRadius: number,
  distanceFilter: number,
  notificationTitle: string,
  notificationText: string,
  debug: boolean,
  startOnBoot: boolean,
  stopOnTerminate: boolean,
  locationProvider: string,
  interval: number,
  fastestInterval: number,
  activitiesInterval: number,
  stopOnStillActivity: boolean,
  url: string,
  httpHeaders: Headers,
  // customize post properties
  postTemplate: Template
};

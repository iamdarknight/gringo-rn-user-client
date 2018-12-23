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
export type Subscriber = {
  name: string,
  avatar: string,
  status: string,
  userID: number
};
export type Broadcasts = {
  id: string,
  message: string,
  location: Object,
  images: Array<string>,
  video: string,
  type: string,
  stream: string,
  created: Date,
  likes: number,
  broadcaster: {
    name: string,
    avatar: string,
    status: string,
    userID: number
  }
};
export type Broadcasters = {
  name: string,
  avatar: string,
  status: string,
  userID: number
};
export type State = {
  name: string,
  avatar: string,
  subscribers: Array<Subscriber>,
  broadcasts: Array<Broadcasts>,
  broadcasters: Array<Broadcasters>,
  bio: string,
  created: Date,
  location: Object,
  privacy: string,
  type: Object,
  broadcasting: boolean,
  owner: Object
};

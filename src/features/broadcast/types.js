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

export type State = {
};

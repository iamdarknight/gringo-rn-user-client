// @flow
import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux';
import type { Reducers } from '@gringo/reducers';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export type Action = {
  type: string;
  payload: ?{
    active: boolean
  }
};

export type Store = ReduxStore<State, Action>;

export type GetState = () => State;

export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Theme =  {
  dark: boolean,
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
    placeholder: string
  },
  fonts: Object
};

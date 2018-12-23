// @flow
export type Action = {
  type: string;
  payload: Object
};

export type Dispatch = (action: Action) => void;

export type Props = {|
|};

export type Account = {
  id: string,
  name: string,
  icon: string,
  status: boolean
};

export type Accounts = Array<Account>
export type State = {
  accounts: Accounts
};

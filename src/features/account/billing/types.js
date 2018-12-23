// @flow

export type Action = {
  type: string,
  payload: Object
};

export type Dispatch = (action: Action) => void;

export type Props = {|
|};

export type Address = {
  id: string,
  name: string,
  icon: string,
};

export type Telephone = {
  id: string,
  name: string,
  icon: string,
  number: string
};

export type Gateway = {
  id: string,
  name: string,
  icon: string,
  status: boolean
};

export type BillingDetail = {
  id: string,
  name: string,
  icon: string
};

export type BillingDetails = Array<BillingDetail>;

export type Addresses = Array<Address>;
export type Telephones = Array<Telephone>;
export type Gateways = Array<Gateway>;

export type State = {
  address: {
    name: string,
    icon: string,
    screen: string,
    details: Addresses
  },
  telephone: {
    name: string,
    icon: string,
    screen: string,
    details: Telephones
  },
  payment: {
    name: string,
    icon: string,
    screen: string,
    gateways: Gateways
  }
};

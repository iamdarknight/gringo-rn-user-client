// @flow
import { SAVE_ADDRESS, SAVE_TELEPHONE } from './constants';
import type { State, Action } from './types';

const initialState:  State = {
  address: {
    name: 'Address',
    icon: 'mail',
    screen: 'ADDRESS',
    details: [
      {
        id: '0',
        name: 'Home',
        icon: 'home',
        placeInfo: {
          formatted_address: '',
        },
        place: {
          latitude: null,
          longitude: null,
        },
      },
      {
        id: '1',
        name: 'Work',
        icon: 'work',
        placeInfo: {
          formatted_address: '',
        },
        place: {
          latitude: null,
          longitude: null,
        },
      },
    ],
  },
  telephone:  {
    name: 'Telephone',
    icon: 'phone',
    screen: 'TELEPHONE',
    details: [
      {
        id: '0',
        name: 'Home',
        icon: 'home',
        number: '',
      },
      {
        id: '1',
        name: 'Work',
        icon: 'work',
        number: '',
      },
    ],
  },
  payment: {
    name: 'Payment Gateways',
    icon: 'credit-card',
    screen: 'PAYMENTS',
    gateways: [
      {
        id: '0',
        name: 'Visa',
        icon: 'cc-visa',
        status: false,
      },
      {
        id: '1',
        name: 'Master Card',
        icon: 'cc-mastercard',
        status: false,
      },
      {
        id: '2',
        name: 'PayPal',
        icon: 'cc-paypal',
        status: false,
      },
      {
        id: '3',
        name: 'Bitcoin',
        icon: 'bitcoin',
        status: false,
      },
    ],
  },
};

const billing = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          details: [
            ...state.address.details.slice(0, action.payload.data.id),
            {
              ...state.address.details[action.payload.data.id],
              placeInfo: action.payload.data.placeInfo,
              place: action.payload.data.place,
            },
            ...state.address.details.slice(action.payload.data.id + 1),
          ],
        },
      };
    case SAVE_TELEPHONE:
      return {
        ...state,
        telephone: {
          ...state.telephone,
          details: [
            ...state.telephone.details.slice(0, action.payload.data.id),
            {
              ...state.telephone.details[action.payload.data.id],
              number: action.payload.data.number,
            },
            ...state.telephone.details.slice(action.payload.data.id + 1),
          ],
        },
      };
    default:
      return state;
  }
};

export default billing;

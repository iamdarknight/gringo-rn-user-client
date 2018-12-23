// @flow
import { API_CALL_REQUEST } from './constants';
import type { State } from './types';

const initialState:  State = {
  accounts: [
    {
      id: '1',
      name: 'Google',
      icon: 'google',
      status: false,
    },
    {
      id: '2',
      name: 'Facebook',
      icon: 'facebook',
      status: false,
    },
    {
      id: '3',
      name: 'Twitter',
      icon: 'twitter',
      status: false,
    },
  ],
};

const AccountSocial = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default AccountSocial;

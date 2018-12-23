// @flow
import {  } from './constants';
import type { State } from './types';

const initialState:  State = {
  sections: [
    {
      id: '4',
      name: 'Channel',
      icon: 'wifi-tethering',
      route: () => { this.props.navigation.navigate('CHANNEL', { 'channelName': 'My Channel' }); },
    },
    {
      id: '2',
      name: 'Social Accounts',
      icon: 'people',
      route: () => { this.props.navigation.navigate('SOCIAL_ACCOUNTS'); },
    },
    {
      id: '1',
      name: 'Billing',
      icon: 'credit-card',
      route: () => { this.props.navigation.navigate('BILLING'); },
    },
    {
      id: '3',
      name: 'Cloud Backup',
      icon: 'cloud',
      route: () => { this.props.navigation.navigate('BACKUP'); },
    },
  ],
};

const managementAccount = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default managementAccount;

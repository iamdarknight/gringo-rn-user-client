// @flow
import {  } from './constants';
import type { State } from './types';

const initialState:  State = {
  tools: [
    {
      'id': '1',
      'name': 'FAQ',
      'description': 'See questions from other gringos',
    },
    {
      'id': '2',
      'name': 'Contact us',
      'description': 'Questions? Need help?',
      route: () => { this.props.navigation.navigate('CONTACT_US'); },
    },
    {
      'id': '3',
      'name': 'Terms and Privacy Policy',
      'description': 'Review our terms and policy',
    },
    {
      'id': '4',
      'name': 'App info',
      'description': 'Application Version; Build Number',
      route: () => { this.props.navigation.navigate('APP_INFO'); },
    },
  ],
};

const helpAccount = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default helpAccount;

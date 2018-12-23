// @flow
import { API_CALL_REQUEST } from './constants';
import type { Action, State } from './types';

const initialState:  State = {
  accounts: [
    {
      id: '1',
      name: 'Google Drive',
      icon: 'google-drive',
      status: false,
    },
    {
      id: '2',
      name: 'Dropbox',
      icon: 'dropbox',
      status: false,
    },
    {
      id: '3',
      name: 'OneDrive',
      icon: 'onedrive',
      status: false,
    },
  ],
};

const backup = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default backup;

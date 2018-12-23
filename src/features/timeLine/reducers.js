// @flow
import {  } from './constants';
import type { State } from './types';

const initialState:  State = {

};

const channelAccount = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default ChannelAccount;

// @flow
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from './constants';
import type { State } from './types';

const initialState:  State = {
  messages: [
    {
      id: 798,
      message: 'Remember those days we used to hangout at McDonalds all day',
      location: {
        latitude: -18.34408202330032,
        longitude: 32.426812767237425,
      },
      poster: '',
      source: 'https://www.expoknews.com/wp-content/uploads/2018/09/extralarge.jpg',
      stream: '',
      link: '',
      created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
      likes: 0,
      sender: {
        name: 'Ian Smith',
        avatar: 'http://lentrepreneuriat.net/sites/default/files/paulbrunson620480-2.jpg',
      },
      type: 'image',
    },
  ],
};

const messaging = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        fetching:  action.payload.data.fetching,
        error:  action.payload.data.error,
      };

    case API_CALL_SUCCESS:

      return {
        ...state,
        fetching:  action.payload.data.fetching,
      };

    case API_CALL_FAILURE:
      return {
        ...state,
        fetching:  action.payload.data.fetching,
        error:  action.payload.data.error,
      };

    default:
      return state;
  }
};

export default messaging;

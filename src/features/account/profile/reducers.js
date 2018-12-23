// @flow
import { SAVE_AVATAR, SAVE_ABOUT, SAVE_NAME, SAVE_NUMBER } from './constants';
import type { State, Action } from './types';

const initialState:  State = {
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  name: 'Schneider',
  about: {
    current: {
      id: '0',
      text: 'Ne Plus Ultra',
      created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
    },
    history: [{
      id: '0',
      text: 'Ne Plus Ultra',
      created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
    }],
  },
  number: '0772284713',
  user: null,
};

const profileAccount = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_AVATAR:
      return {
        ...state,
        avatar: action.payload.data,
      };
    case SAVE_NAME:
      return {
        ...state,
        name: action.payload.data,
      };
    case SAVE_ABOUT:
      return {
        ...state,
        about: {
          current: {
            id: state.about.history.length,
            text: action.payload.data.text,
            created: action.payload.data.created,
          },
          history: [
            ...state.about.history,
            {
              id: state.about.history.length,
              text: action.payload.data.text,
              created: action.payload.data.created,
            },
          ]
        },
      };
    case SAVE_NUMBER:
      return {
        ...state,
        number: action.payload.data,
      };

    default:
      return state;
  }
};

export default profileAccount;

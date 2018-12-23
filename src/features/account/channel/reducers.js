// @flow
import { SAVE_NAME, SAVE_AVATAR, SAVE_BROADCASTER, SAVE_BIO, SAVE_PRIVACY, SAVE_BROADCASTING } from './constants';
import type { State, Action } from './types';

const initialState:  State = {
  name: 'My Channel',
  avatar: 'https://www.corporateleadersgroup.com/reports-evidence-and-insights/news-images/cnn-logo.tif/image_preview',
  subscribers: [
    {
      name: 'Schneider',
      avatar: '',
      status: 'Ne Plus ultra',
      userID: 1,
    },
  ],
  broadcasts: [
    {
      id: '2',
      message: '',
      location: {},
      images: [''],
      video: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
      type: 'video',
      stream: '',
      created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
      likes: 0,
      broadcaster:{
        name: 'Schneider',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        status: 'Ne Plus ultra',
        userID: '1',
      },
    },
  ],
  broadcasters: [
    {
      name: 'Schneider',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      status: 'Ne Plus ultra',
      userID: '1',
    },
  ],
  bio: 'X',
  created: null,
  location: {},
  privacy: {
    label: 'Public',
    selected: true,
    value: 'public',
  },
  type: {},
  broadcasting: false,
  owner: null,
};

const ChannelAccount = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_NAME:
      return {
        ...state,
        name: action.payload.data,
      };
    case SAVE_AVATAR:
      return {
        ...state,
        avatar: action.payload.data,
      };
    case SAVE_BIO:
      return {
        ...state,
        bio: action.payload.data,
      };
    case SAVE_BROADCASTER:
      return {
        ...state,
        broadcasters: [
          ...state.broadcasters,
          {
            ...action.payload.data,
          },
        ],
      };
    case SAVE_PRIVACY:
      return {
        ...state,
        privacy: action.payload.data,
      };
    case SAVE_BROADCASTING:
      return {
        ...state,
        broadcasting: action.payload.data,
      };

    default:
      return state;
  }
};

export default ChannelAccount;

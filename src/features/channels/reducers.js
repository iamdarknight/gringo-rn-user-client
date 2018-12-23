// ACCOUNT REDUCERS
import * as reduce from './types';

const initialState = {
  subscriptions: [
    {
      id: '0',
      name: 'CNN',
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
          id: 798,
          message: 'Violence erupts in Zimbabwe after elections.',
          location: {
            latitude: -18.74408202330032,
            longitude: 32.326812767237425,
          },
          poster: 'https://cdn.cnn.com/cnnnext/dam/assets/180801144618-05-zimbabwe-protests-0801-exlarge-169.jpg',
          source: 'https://cnnios-f.akamaihd.net/i/cnn/big/world/2018/08/02/zimbabwe-election-violence-cnni-sot-vpx.cnn_2202483_ios_,440,650,840,1240,3000,5500,.mp4.csmil/index_3_av.m3u8?null=0',
          stream: '',
          link: 'https://edition.cnn.com/2018/08/02/africa/zimbabwe-election-violence-intl/index.html',
          created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
          likes: 33,
          broadcaster: null,
          channel: {
            name: 'CNN',
            avatar: 'https://www.corporateleadersgroup.com/reports-evidence-and-insights/news-images/cnn-logo.tif/image_preview',
          },
          type: 'video',
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
      bio: 'Bringing you the latest breaking news from across the world.',
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
      subscribed: true,
    },
  ],
  store: [
    {
      id: '0',
      name: 'BBC',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/BBC_logo_new.svg/800px-BBC_logo_new.svg.png',
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
          id: 434,
          message: 'Violence erupts in Zimbabwe after elections.',
          location: {
            latitude: -18.74408202330032,
            longitude: 32.326812767237425,
          },
          poster: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/102DB/production/_104376266_118c5a74-84e2-443e-b9f7-57d3a3ae57c5.jpg',
          source: 'https://vod-dash-ww-live.bbcfmt.hs.llnwd.net/usp/auth/vod/piff_abr_full_sd/1478fd-p06skrb3/vf_p06skrb3_d5b65b27-3305-4262-b65e-8d05fa1bbc5b.ism/dash/vf_p06skrb3_d5b65b27-3305-4262-b65e-8d05fa1bbc5b-audio_eng=96000-2.m4s',
          stream: '',
          link: 'https://www.bbc.com/news/av/world-africa-46309882/zimbabwe-after-mugabe-we-have-a-certain-level-of-freedom?intlink_from_url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Ftopics%2Fcrr7mlg0rpvt%2Fzimbabwe&link_location=live-reporting-map',
          created: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
          likes: 33,
          broadcaster: null,
          channel: {
            name: 'BBC',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/BBC_logo_new.svg/800px-BBC_logo_new.svg.png',
          },
          type: 'video',
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
      bio: 'Delivering breaking news from across the world',
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
      subscribed: false,
    },
  ],
};

const applications = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default applications;

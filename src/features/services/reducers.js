// SERVICES REDUCERS
import * as reduce from './constants';

const initialState = {
  cartServices: [
    {
      id: 982847497,
      name: 'FreshInABox',
      type: 'shoppingCart',
      cartIsVisible: false,
      cartCost: 0.00,
      description: 'Home packed vegetables & fruits in a box, delivered to your door.',
      logo: 'https://pbs.twimg.com/profile_images/1056556181039300609/8PHmGQfU_400x400.jpg',
      catalogIsVisible: false,
      catalog: [
        {
          id: 43654675436453,
          name: 'Mixed Vegetable Box',
          avatar_url: 'https://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/1st-quality-produce-15-for-1-farm-to-families-box-2999-value-1-5713322-regular.jpg',
          unitPrice: 3.50,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
        {
          id: 50946548954,
          name: 'Potato Bag',
          avatar_url: 'http://lifestylerezolutions.com/images/articles/weight-loss/art_potato-weight-info.jpg',
          unitPrice: 18.00,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
        {
          id: 436546778,
          name: 'Crate Eggs',
          avatar_url: 'https://tuzonamarket.com/wp-content/uploads/2016/09/Cajas-de-Huevos.jpg',
          unitPrice: 7.50,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
        {
          id: 5437664765,
          name: 'Cabbage Head',
          avatar_url: 'https://us.123rf.com/450wm/hyrma/hyrma1802/hyrma180200010/95055745-head-of-cabbage-isolated-on-white-background.jpg?ver=6',
          unitPrice: 2.00,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
      ],
    },
    {
      id: 54743746764,
      name: 'BottleDrop',
      type: 'shoppingCart',
      cartIsVisible: false,
      cartCost: 0.00,
      description: 'Get your favorite bottle delivered to your door step.',
      logo: 'https://steemitimages.com/p/99pyU5Ga1kwqSXWA2evTexn6YzPHotJF8R85JZsErvtTWY2e7tGoeeSdz1BdrXN6uyfPhQbci9KqyQjPAYGMfQ9XU2NNTRdqtazKv8MFRKWprSYuepYySiSzMZGnA9S5ca?format=match&mode=fit',
      catalogIsVisible: false,
      catalog: [
        {
          id: 4364654364,
          name: 'Johnny Walker Blue Label',
          avatar_url: 'https://reservebar-cdn.global.ssl.fastly.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/w/jw-ghost-and-rare.jpg',
          unitPrice: 40.50,
          selected: false,
          quantity: 1,
          cartId: 54743746764,
        },
        {
          id: 5463654645,
          name: 'Jack Daniels Tennesee Honey',
          avatar_url: 'https://sgfm.elcorteingles.es/SGFM/00/43/0/0118722900430/0118722900430000g01011.jpg',
          unitPrice: 34.00,
          selected: false,
          quantity: 1,
          cartId: 54743746764,
        },
        {
          id: 3453253425,
          name: 'Indian Tonic Water',
          avatar_url: 'https://d2rfo6yapuixuu.cloudfront.net/hae/h72/9159610302494/7310401003306_1529589054726_master_axfood_400',
          unitPrice: 3.50,
          selected: false,
          quantity: 1,
          cartId: 54743746764,
        },
        {
          id: 43253635543,
          name: '10kg Ice',
          avatar_url: 'https://static.shoplightspeed.com/shops/612869/files/009625674/999x999x1/kingkeg-20-lbs-bag-of-ice.jpg',
          unitPrice: 5.00,
          selected: false,
          quantity: 1,
          cartId: 54743746764,
        },
      ],
    },
  ],
  pickAndDropServices: [],
  carts: [
    {
      id: 324534534,
      type: 'cartServices',
      ordered: new Date(Date.UTC(2018, 7, 30, 17, 20, 0)),
      trackingNumber: 43423432,
      contents: [
        {
          id: 43654675436453,
          name: 'Mixed Vegetable Box',
          avatar_url: 'https://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/1st-quality-produce-15-for-1-farm-to-families-box-2999-value-1-5713322-regular.jpg',
          unitPrice: 3.50,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
        {
          id: 50946548954,
          name: 'Potato Bag',
          avatar_url: 'http://lifestylerezolutions.com/images/articles/weight-loss/art_potato-weight-info.jpg',
          unitPrice: 18.00,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
        {
          id: 436546778,
          name: 'Crate Eggs',
          avatar_url: 'https://tuzonamarket.com/wp-content/uploads/2016/09/Cajas-de-Huevos.jpg',
          unitPrice: 7.50,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
        {
          id: 5437664765,
          name: 'Cabbage Head',
          avatar_url: 'https://us.123rf.com/450wm/hyrma/hyrma1802/hyrma180200010/95055745-head-of-cabbage-isolated-on-white-background.jpg?ver=6',
          unitPrice: 2.00,
          selected: false,
          quantity: 1,
          cartId: 982847497,
        },
      ],
      service: {
        id: 982847497,
        name: 'FreshInABox',
        logo: 'https://pbs.twimg.com/profile_images/1056556181039300609/8PHmGQfU_400x400.jpg',

      },
      dropLocation: {
        latitude: -18.54408202330032,
        longitude: 32.526812767237425,
      },
      startLocation: {
        latitude: -18.74408202330032,
        longitude: 32.326812767237425,
      },
      currentLocation: {
        latitude: -18.74408202330032,
        longitude: 32.326812767237425,
      },
      status: 'ACTIVE',
      delivered: null,
      cartCost: 92.00,
    }
  ],
};

calculateCartOnSelection = (state, cartId, catalogId) => {
  if (state.cartServices[cartId].catalog[catalogId].selected === false) {
    return state.cartServices[cartId].cartCost + state.cartServices[cartId].catalog[catalogId].unitPrice * state.cartServices[cartId].catalog[catalogId].quantity;
  }
  else {
    return state.cartServices[cartId].cartCost - state.cartServices[cartId].catalog[catalogId].unitPrice * state.cartServices[cartId].catalog[catalogId].quantity;
  }
};

calculateCartOnQuantityChange = (state, cartId, catalogId, type) => {
  if (type === reduce.SAVE_INCREASE_CART_ITEM) {
    return state.cartServices[cartId].cartCost + state.cartServices[cartId].catalog[catalogId].unitPrice;
  }
  else {
    return state.cartServices[cartId].cartCost - state.cartServices[cartId].catalog[catalogId].unitPrice;
  }
}

const indexOfCartService = (cartServices, cartId) => {
  let cartIndex;
  cartServices.find((cart, index) => {
    if(cart.id === cartId){
      cartIndex = index;
    }
  });
  return cartIndex;
};

const indexOfCatalogItem = (cartServices, cartIndex, catalogId) => {
  let catalogIndex;
  cartServices[cartIndex].catalog.find((item, index) => {
    if(item.id === catalogId){
      catalogIndex = index;
    }
  });
  return catalogIndex;
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case reduce.SAVE_TOGGLE_CART:
      cartIndex = indexOfCartService(state.cartServices, action.payload.data.cartId);
      if(cartIndex !== undefined){
        return {
          ...state,
          cartServices: [
            ...state.cartServices.slice(0, cartIndex),
            {
              ...state.cartServices[cartIndex],
              cartIsVisible: !state.cartServices[cartIndex].cartIsVisible

            },
            ...state.cartServices.slice(cartIndex + 1),
          ],
        };
      };
      return state;
    case reduce.SAVE_TOGGLE_CATALOG:
      cartIndex = indexOfCartService(state.cartServices, action.payload.data.cartId);
      if(cartIndex !== undefined){
        return {
          ...state,
          cartServices: [
            ...state.cartServices.slice(0, cartIndex),
            {
              ...state.cartServices[cartIndex],
              catalogIsVisible: !state.cartServices[cartIndex].catalogIsVisible,
            },
            ...state.cartServices.slice(cartIndex + 1),
          ],
        };
      };
      return state;
      break;
    case reduce.SAVE_TOGGLE_CART_SELECTION:
      cartIndex = indexOfCartService(state.cartServices, action.payload.data.cartId);
      if(cartIndex !== undefined){
        catalogIndex = indexOfCatalogItem(state.cartServices, cartIndex, action.payload.data.catalogId);
        if(catalogIndex !== undefined){
          return {
            ...state,
            cartServices: [
              ...state.cartServices.slice(0, cartIndex),
              {
                ...state.cartServices[cartIndex],
                cartCost: calculateCartOnSelection(state, cartIndex, catalogIndex ),
                catalog: [
                  ...state.cartServices[cartIndex].catalog.slice(0, catalogIndex),
                  {
                    ...state.cartServices[cartIndex].catalog[catalogIndex],
                    selected: !state.cartServices[cartIndex].catalog[catalogIndex].selected,
                  },
                  ...state.cartServices[cartIndex].catalog.slice(catalogIndex + 1),
                ],
              },
              ...state.cartServices.slice(cartIndex + 1),
            ],
          };
        };
      };
      return state;
    case reduce.SAVE_INCREASE_CART_ITEM:
      cartIndex = indexOfCartService(state.cartServices, action.payload.data.cartId);
      if(cartIndex !== undefined){
        catalogIndex = indexOfCatalogItem(state.cartServices, cartIndex, action.payload.data.catalogId);
        if(catalogIndex !== undefined){
          return {
            ...state,
            cartServices: [
              ...state.cartServices.slice(0, cartIndex),
              {
                ...state.cartServices[cartIndex],
                cartCost: calculateCartOnQuantityChange(state, cartIndex, catalogIndex, action.type ),
                catalog: [
                  ...state.cartServices[cartIndex].catalog.slice(0, catalogIndex),
                  {
                    ...state.cartServices[cartIndex].catalog[catalogIndex],
                    quantity: state.cartServices[cartIndex].catalog[catalogIndex].quantity + 1,
                  },
                  ...state.cartServices[cartIndex].catalog.slice(catalogIndex + 1),
                ],
              },
              ...state.cartServices.slice(cartIndex + 1),
            ],
          };
        };
      };
      return state;
    case reduce.SAVE_DECREASE_CART_ITEM:
      cartIndex = indexOfCartService(state.cartServices, action.payload.data.cartId);
      if(cartIndex !== undefined){
        catalogIndex = indexOfCatalogItem(state.cartServices, cartIndex, action.payload.data.catalogId);
        if(catalogIndex !== undefined){
          return {
            ...state,
            cartServices: [
              ...state.cartServices.slice(0, cartIndex),
              {
                ...state.cartServices[cartIndex],
                cartCost: calculateCartOnQuantityChange(state, cartIndex, catalogIndex, action.type ),
                catalog: [
                  ...state.cartServices[cartIndex].catalog.slice(0, catalogIndex),
                  {
                    ...state.cartServices[cartIndex].catalog[catalogIndex],
                    quantity: state.cartServices[cartIndex].catalog[catalogIndex].quantity - 1,
                  },
                  ...state.cartServices[cartIndex].catalog.slice(catalogIndex + 1),
                ],
              },
              ...state.cartServices.slice(cartIndex + 1),
            ],
          };
        };
      };
      return state;
    default:
      return state;
  }
};


export default services;

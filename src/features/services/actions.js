// @flow
import { TOGGLE_CART, TOGGLE_CATALOG, TOGGLE_CART_SELECTION, INCREASE_CART_ITEM, DECREASE_CART_ITEM } from './constants';
import type {  } from './types';

export const toggleCart = (cartId: string): Action => ({
  type: TOGGLE_CART,
  payload: {
    data: {
      cartId,
    },
  },
});export const toggleCatalog = (cartId: string): Action => ({
  type: TOGGLE_CATALOG,
  payload: {
    data: {
      cartId,
    },
  },
});
export const toggleCartSelection = (cartId: string, catalogId: string): Action => ({
  type: TOGGLE_CART_SELECTION,
  payload: {
    data: {
      cartId,
      catalogId,
    },
  },
});
export const increaseCartItem = (cartId: string, catalogId: string): Action => ({
  type: INCREASE_CART_ITEM,
  payload: {
    data: {
      cartId,
      catalogId,
    },
  },
});
export const decreaseCartItem = (cartId: string, catalogId: string): Action => ({
  type: DECREASE_CART_ITEM,
  payload: {
    data: {
      cartId,
      catalogId,
    },
  },
});

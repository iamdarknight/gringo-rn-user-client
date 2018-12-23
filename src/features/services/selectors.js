// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';

// selectors
const getCartServices = (state: Object): Object => state.SERVICES.cartServices;
const getCarts = (state: Object): Object => state.SERVICES.carts;

// reselect functions
export const makeCartServicesState =
  (): SelectorCreator => createSelector(
    [getCartServices],
    CartServices => CartServices
  );

export const makeActiveCartsState =
  (): SelectorCreator => createSelector(
    [getCarts],
    Carts => Carts.filter(cart => cart.status !== 'INACTIVE')
  );

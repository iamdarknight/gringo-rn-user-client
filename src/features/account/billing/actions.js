// @flow
import { EDIT_ADDRESS, EDIT_TELEPHONE } from './constants';
import type { Action, Address, Telephone } from './types';

export const editAddress = (address: Address): Action => ({
  type: EDIT_ADDRESS,
  payload: {
    data: address,
  },
});

export const editTelephone = (telephone: Telephone): Action => ({
  type: EDIT_TELEPHONE,
  payload: {
    data: telephone,
  },
});

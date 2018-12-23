// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { Addresses, Telephones, Gateways, BillingDetails } from './types';
// selectors
const getBillingDetails = (state: Object): Object => state.ACCOUNT.BILLING;
const getBillingAddress = (state: Object): Object => state.ACCOUNT.BILLING.address.details;
const getBillingTelephone = (state: Object): Object => state.ACCOUNT.BILLING.telephone.details;
const getBillingPaymentGateways = (state: Object): Object => state.ACCOUNT.BILLING.payment.gateways;

// reselect functions
export const makeBillingDetailsState =
  (): SelectorCreator => createSelector(
    [getBillingDetails],
    // TODO: Return an array with detail object with name icon screen detailId
    (details: BillingDetails): BillingDetails => {
      const finalDetails = [];
      const y = Object.entries(details);
      for (let i = 0; i < y.length; i++) {
        const obj = {
          id: `${i}`,
          name: y[i][1].name,
          icon: y[i][1].icon,
          screen: y[i][1].screen,
        };
        finalDetails.push(obj);
      }
      return finalDetails;
    }
  );

export const makeBillingAddressState =
  (): SelectorCreator => createSelector(
    [getBillingAddress],
    (addresses: Addresses): Addresses => addresses
  );

export const makeBillingTelephoneState =
  (): SelectorCreator => createSelector(
    [getBillingTelephone],
    (telephones: Telephones): Telephones => telephones
  );

export const makeBillingPaymentGatewaysState =
  (): SelectorCreator => createSelector(
    [getBillingPaymentGateways],
    (gateways: Gateways): Gateways => gateways
  );

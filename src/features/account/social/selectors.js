// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { Accounts } from './types';
// selectors
const getAccounts = (state: Object): Object => state.ACCOUNT.SOCIAL.accounts;

// reselect functions
export const makeSocialAccountsState =
  (): SelectorCreator => createSelector(
    [getAccounts],
    (accounts: Accounts): Accounts => accounts
  );

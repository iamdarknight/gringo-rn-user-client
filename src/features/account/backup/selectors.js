// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type { Accounts } from './types';
// selectors
const getAccounts = (state: Object): Object => state.ACCOUNT.BACKUP.accounts;

// reselect functions
export const makeBackupAccountsState =
  (): SelectorCreator => createSelector(
    [getAccounts],
    (accounts: Accounts): Accounts => accounts
  );

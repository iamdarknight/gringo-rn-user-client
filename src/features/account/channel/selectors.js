// @flow
import { createSelector } from 'reselect';
import type { SelectorCreator } from 'reselect';
import type {  } from './types';
// selectors
const getAvatar = (state: Object): Object => state.ACCOUNT.CHANNEL.avatar;
const getSubscribers = (state: Object): Object => state.ACCOUNT.CHANNEL.subscribers;
const getBroadcasts = (state: Object): Object => state.ACCOUNT.CHANNEL.broadcasts;
const getBroadcasters = (state: Object): Object => state.ACCOUNT.CHANNEL.broadcasters;
const getBio = (state: Object): Object => state.ACCOUNT.CHANNEL.bio;
const getCreated = (state: Object): Object => state.ACCOUNT.CHANNEL.created;
const getLocation = (state: Object): Object => state.ACCOUNT.CHANNEL.location;
const getName = (state: Object): Object => state.ACCOUNT.CHANNEL.name;
const getPrivacy = (state: Object): Object => state.ACCOUNT.CHANNEL.privacy;
const getType = (state: Object): Object => state.ACCOUNT.CHANNEL.type;
const getBroadcasting = (state: Object): Object => state.ACCOUNT.CHANNEL.broadcasting;

// reselect functions
export const makeAvatarState =
  (): Function => createSelector(
    [getAvatar],
    (avatar: Avatar) => avatar
  );

export const makeSubscribersState =
  (): Function => createSelector(
    [getSubscribers],
    (subscribers: Subcribers) => subscribers
  );

export const makeBroadcastsState =
  (): Function => createSelector(
    [getBroadcasts],
    (broadcasts: Broadcasts) => broadcasts
  );
export const makeBroadcastersState =
  (): Function => createSelector(
    [getBroadcasters],
    (broadcasters: Broadcasters) => broadcasters
  );
export const makeBioState =
  (): Function => createSelector(
    [getBio],
    (bio: Bio) => bio
  );
export const makeCreatedState =
  (): Function => createSelector(
    [getCreated],
    (created: created) => created
  );
export const makeLocationState =
  (): Function => createSelector(
    [getLocation],
    (location: location) => location
  );
export const makeNameState =
  (): Function => createSelector(
    [getName],
    (name: Name) => name
  );
export const makePrivacyState =
  (): Function => createSelector(
    [getPrivacy],
    (privacy: Privacy) => privacy
  );
export const makeTypeState =
  (): Function => createSelector(
    [getType],
    (type: Type) => type
  );
export const makeBroadcastingState =
  (): Function => createSelector(
    [getBroadcasting],
    (broadcasting: Broadcasting) => broadcasting
  );

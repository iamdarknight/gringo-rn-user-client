// @flow
import * as Actions from './constants';
import type { Name, Avatar, Broadcaster, Bio, Privacy, Broadcasting } from './types';

export const editName = (name: Name): Action => ({
  type: Actions.EDIT_NAME,
  payload: {
    data: name,
  },
});
export const editAvatar = (avatar: Avatar): Action => ({
  type: Actions.EDIT_AVATAR,
  payload: {
    data: avatar,
  },
});
export const addBroadcaster = (broadcaster: Broadcaster): Action => ({
  type: Actions.ADD_BROADCASTER,
  payload: {
    data: broadcaster,
  },
});
export const editBio = (bio: Bio): Action => ({
  type: Actions.EDIT_BIO,
  payload: {
    data: bio,
  },
});
export const setPrivacy = (privacy: Privacy): Action => ({
  type: Actions.SET_PRIVACY,
  payload: {
    data: privacy,
  },
});
export const setBroadcasting = (broadcasting: Broadcasting): Action => ({
  type: Actions.SET_BROADCASTING,
  payload: {
    data: broadcasting,
  },
});

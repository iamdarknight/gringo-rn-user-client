// @flow
import { EDIT_AVATAR, EDIT_ABOUT, EDIT_NAME, EDIT_NUMBER } from './constants';
import type {  } from './types';

export const editAvatar = (avatar: string): Action => ({
  type: EDIT_AVATAR,
  payload: {
    data: avatar,
  },
});
export const editName = (name: string): Action => ({
  type: EDIT_NAME,
  payload: {
    data: name,
  },
});
export const editAbout = (about: string): Action => ({
  type: EDIT_ABOUT,
  payload: {
    data: about,
  },
});
export const editNumber = (number: string): Action => ({
  type: EDIT_NUMBER,
  payload: {
    data: number,
  },
});

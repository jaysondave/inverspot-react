import {
  setItem,
  findItem,
  removeItem,
  removeAllItems,
} from './storage';

const storageId = 'user';
export const setStorage = (user) => {
  const { isRemember } = user;
  setItem(storageId, user, isRemember);
  removeItem(storageId, !isRemember);
};

export const getStorage = () => (
  findItem(storageId)
);

export const emptyStorage = () => (
  removeAllItems(storageId)
);

export default {
  setStorage,
  getStorage,
  emptyStorage,
};

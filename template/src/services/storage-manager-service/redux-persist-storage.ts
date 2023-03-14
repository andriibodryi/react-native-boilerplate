import { Storage } from 'redux-persist';
import { MMKV } from 'react-native-mmkv/lib/typescript/MMKV';

import { StorageManagerService } from '@src/services';

const adaptStorageForRedux = (storage: MMKV): Storage => ({
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
});

export const securedReduxPersistStorage = adaptStorageForRedux(
  StorageManagerService.getSecureStorage(),
);
export const defaultReduxPersistStorage = adaptStorageForRedux(
  StorageManagerService.getDefaultStorage(),
);

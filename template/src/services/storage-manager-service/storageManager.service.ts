import { MMKV } from 'react-native-mmkv';

import { env } from '@src/config';

import { StorageManagerType, STORAGE } from './storageManager.types';

class StorageManager implements StorageManagerType {
  private defaultStorage = new MMKV({
    id: STORAGE.DEFAULT_STORAGE,
    encryptionKey: env.STORE_ENCRYPTION_KEY,
  });
  private secureStorage = new MMKV({
    id: STORAGE.SECURED,
    encryptionKey: env.STORE_ENCRYPTION_KEY,
  });

  public enableDebugging = () => {
    if (__DEV__) {
      const {
        initializeMMKVFlipper,
      } = require('react-native-mmkv-flipper-plugin');
      initializeMMKVFlipper({ default: this.defaultStorage });
    }
  };

  public getDefaultStorage = () => this.defaultStorage;

  public getSecureStorage = () => this.secureStorage;
}

export const StorageManagerService = new StorageManager();

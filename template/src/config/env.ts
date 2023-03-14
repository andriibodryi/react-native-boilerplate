import Config from 'react-native-config';

export const env = {
  BASE_URL: Config.BASE_URL,
  STORE_ENCRYPTION_KEY: Config.STORE_ENCRYPTION_KEY,
  QA: Config.ENVIRONMENT === 'QA',
  PROD: Config.ENVIRONMENT === 'PROD',
};

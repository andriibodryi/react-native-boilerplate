import { StyleSheet, TextStyle } from 'react-native';

import { appStyleConfigDefault } from './style.config';

export type AppStyles = typeof appStyleConfigDefault;

export type StyleSheetСallback<T extends ReturnType<typeof StyleSheet.create>> =
  (appStyles: AppStyles) => T;

export enum ColorSchemeNames {
  light = 'light',
  dark = 'dark',
}

export interface CustomTypography {
  [key: string]: Partial<TextStyle>;
}

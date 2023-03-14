import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

import { StyleSheetСallback } from './types';
import { useStyleConfig } from './useStyleConfig';

export const useStyles = <T extends ReturnType<typeof StyleSheet.create>>(
  callback: StyleSheetСallback<T>,
) => {
  const styleConfig = useStyleConfig();

  return useMemo(() => callback(styleConfig), [styleConfig, callback]);
};

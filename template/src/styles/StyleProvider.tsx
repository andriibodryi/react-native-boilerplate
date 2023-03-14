import { useColorScheme } from 'react-native';
import { FC, PropsWithChildren, useMemo } from 'react';
import { merge } from 'lodash';

import {
  appStyleConfigDefault,
  appStyleConfigLight,
  appStyleConfigDark,
} from './style.config';
import { StyleContext } from './StyleContext';
import { ColorSchemeNames } from './types';

export const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
  const scheme = useColorScheme();
  const appStyleConfig = useMemo(() => {
    if (scheme === ColorSchemeNames.light) {
      return merge(appStyleConfigDefault, appStyleConfigLight);
    }
    if (scheme === ColorSchemeNames.dark) {
      return merge(appStyleConfigDefault, appStyleConfigDark);
    }
    return appStyleConfigDefault;
  }, [scheme]);

  return (
    <StyleContext.Provider value={appStyleConfig}>
      {children}
    </StyleContext.Provider>
  );
};

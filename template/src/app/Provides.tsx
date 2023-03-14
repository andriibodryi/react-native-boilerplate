import { FC, PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StoreProvider from '@src/store/StoreProvider';
import { StyleProvider } from '@src/styles/StyleProvider';

export const Provides: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StyleProvider>
        <StoreProvider>{children}</StoreProvider>
      </StyleProvider>
    </SafeAreaProvider>
  );
};

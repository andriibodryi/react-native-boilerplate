import { Provider } from 'react-redux';
import { FC, PropsWithChildren } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default StoreProvider;

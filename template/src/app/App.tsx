import React from 'react';

import { RootNavigator } from '../navigators/RootNavigator';
import { Provides } from './Provides';

const App: React.FC = () => {
  return (
    <Provides>
      <RootNavigator />
    </Provides>
  );
};

export default App;

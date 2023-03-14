import { useContext } from 'react';

import { StyleContext } from './StyleContext';

export const useStyleConfig = () => {
  return useContext(StyleContext);
};

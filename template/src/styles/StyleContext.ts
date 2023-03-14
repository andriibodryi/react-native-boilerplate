import { createContext } from 'react';

import { appStyleConfigDefault } from './style.config';
import { AppStyles } from './types';

export const StyleContext = createContext<AppStyles>(appStyleConfigDefault);

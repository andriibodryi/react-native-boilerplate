import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import { RootState } from '@src/store/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

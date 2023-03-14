import { useDispatch as useReduxDispatch } from 'react-redux';

import { AppDispatch } from '@src/store/store';

export const useDispatch = () => useReduxDispatch<AppDispatch>();

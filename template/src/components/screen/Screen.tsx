import * as React from 'react';

import { ScreenTypes } from './screen.types';
import { isFixed } from './screen.presets';
import { ScreenWithoutScrolling, ScreenWithScrolling } from './components';

export const Screen: React.FC<ScreenTypes> = ({ preset, ...props }) => {
  if (isFixed(preset)) {
    return <ScreenWithoutScrolling {...props} />;
  }
  return <ScreenWithScrolling {...props} />;
};

export default Screen;

import React, { useState } from 'react';

import BaseInput from '../base-input/BasicInput';
import { SecureInputTypes } from './secure-input.types';
import { SECURE_INPUT_ICON_SIZE } from './secure-input.constants';

const SecureInput: React.FC<SecureInputTypes> = props => {
  const [isSecure, setIsSecure] = useState(true);

  const toggleIsSecure = () => setIsSecure(prevState => !prevState);

  return (
    <BaseInput
      {...props}
      iconName={isSecure ? 'hidden' : 'check'}
      iconSize={SECURE_INPUT_ICON_SIZE}
      onIconPress={toggleIsSecure}
      secureTextEntry={isSecure}
    />
  );
};

export default SecureInput;

import React from 'react';

import SanitizedInput from './components/sanitized-input/SanitizedInput';
import { TextInputTypes } from './text-input.types';

const TextInput: React.FC<TextInputTypes> = props => {
  return <SanitizedInput {...props} />;
};

export default TextInput;

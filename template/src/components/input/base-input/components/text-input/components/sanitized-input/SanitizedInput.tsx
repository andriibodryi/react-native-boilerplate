import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

import { SanitizedInputTypes } from './sanitized-input.types';
import { defaultSanitizer } from '../../utils';

const SanitizedInput: React.FC<SanitizedInputTypes> = ({
  value,
  sanitizer = defaultSanitizer,
  onChangeText,
  maxLength,
  forceValueUpdate = false,
  ...rest
}) => {
  const [sanitized, setSanitized] = useState(value);

  useEffect(() => {
    if (forceValueUpdate) {
      setSanitized(sanitizer(value || ''));
    }
  }, [forceValueUpdate, sanitizer, value]);

  return (
    <TextInput
      onChangeText={v => {
        const sanitizedValue = sanitizer(v);
        setSanitized(() => sanitizedValue);
        onChangeText?.(sanitizedValue);
      }}
      value={sanitized}
      maxLength={maxLength}
      {...rest}
    />
  );
};

export default SanitizedInput;

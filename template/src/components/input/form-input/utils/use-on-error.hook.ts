import { useEffect } from 'react';
import { FieldError } from 'react-hook-form';

import type { OnErrorMapType } from '../form-input.types';

export const useFormInputOnError = (
  fieldError?: FieldError,
  onErrorMap?: OnErrorMapType,
) => {
  const errorType = fieldError?.type;
  useEffect(() => {
    if (errorType) {
      onErrorMap?.[errorType]?.();
    }
  }, [errorType, onErrorMap]);
};

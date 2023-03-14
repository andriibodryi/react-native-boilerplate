import React from 'react';
import { useController } from 'react-hook-form';

import { FormInputTypes } from './form-input.types';
import { useFormInputOnOnceDirty } from './utils/use-on-once-dirty.hook';
import { useFormInputOnError } from './utils/use-on-error.hook';
import { useCheckRulesOnMount } from './utils/use-check-rules-on-mount.hook';
import { formInputMap } from './form-input.constants';

const FormInput: React.FC<FormInputTypes> = ({
  type,
  name,
  rules,
  defaultValue,
  onOnceDirty,
  onErrorMap: onError,
  checkRulesOnMount,
  ...props
}) => {
  const { field, fieldState } = useController({
    name,
    rules,
    defaultValue,
  });

  useCheckRulesOnMount(field, checkRulesOnMount);
  useFormInputOnOnceDirty(fieldState.isDirty, onOnceDirty);
  useFormInputOnError(fieldState.error, onError);

  const FormInputComponent = formInputMap[type];

  return (
    <FormInputComponent
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      errorMessage={fieldState.error?.message}
      {...props}
    />
  );
};

export default FormInput;

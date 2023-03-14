import { FieldError, UseControllerProps } from 'react-hook-form';

import { BaseInputTypes } from '../base-input/base-input.types';
import { formInputMap } from './form-input.constants';

type FormInputType = keyof typeof formInputMap;

type ErrorTypes = FieldError['type'];

export type OnErrorMapType = Partial<Record<ErrorTypes, () => void>>;

export interface FormInputTypes extends BaseInputTypes, UseControllerProps {
  type: FormInputType;
  defaultValue?: string;
  onOnceDirty?: () => void;
  onErrorMap?: OnErrorMapType;
  checkRulesOnMount?: boolean;
}

import { BaseInputTypes } from '../base-input/base-input.types';

export type SecureInputTypes = Omit<
  BaseInputTypes,
  'iconName' | 'onIconPress' | 'secureTextEntry' | 'iconColor'
>;

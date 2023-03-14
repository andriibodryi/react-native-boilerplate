import { TextInputProps } from 'react-native';

export interface SanitizedInputTypes extends TextInputProps {
  sanitizer?: (input: string) => string;
  onChangeText?: (formatted: string, extracted?: string) => void;
  forceValueUpdate?: boolean;
}

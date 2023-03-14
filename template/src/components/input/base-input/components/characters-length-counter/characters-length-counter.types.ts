import { StyleProp, TextStyle } from 'react-native';

interface CharactersLengthCounterTypes {
  length?: number;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
  showCounter: boolean;
}

export default CharactersLengthCounterTypes;

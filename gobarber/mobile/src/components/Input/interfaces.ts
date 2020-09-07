import { TextInputProps } from 'react-native';

export interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

export interface IInputValueReference {
  value: string;
}

export interface IInputRef {
  focus(): void;
}

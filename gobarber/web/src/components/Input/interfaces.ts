import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

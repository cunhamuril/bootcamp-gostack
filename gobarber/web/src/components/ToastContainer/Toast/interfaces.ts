import { IToastMessage } from '../../../hooks/toast/interfaces';

export interface IToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: number;
  message: IToastMessage;
  style: object;
}

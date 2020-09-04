import { IToastMessage } from '../../../hooks/toast/interfaces';

export interface IToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
  message: IToastMessage;
  style: object;
}

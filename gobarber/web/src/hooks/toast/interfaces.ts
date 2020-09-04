export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export interface IToastContextData {
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

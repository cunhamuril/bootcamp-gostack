interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}
export interface IAuthContextData {
  user: IUser;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(data: IUser): void;
}

export interface IAuthState {
  token: string;
  user: IUser;
}

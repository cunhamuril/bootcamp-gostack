interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthContextData {
  user: object;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export interface IAuthState {
  token: string;
  user: object;
}

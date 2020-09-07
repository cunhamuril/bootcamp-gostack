interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthContextData {
  user: object;
  loading: boolean;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export interface IAuthState {
  token: string;
  user: object;
}

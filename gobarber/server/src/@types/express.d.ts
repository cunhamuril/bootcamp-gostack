// vai "alterar" as tipagem do express, adicionando o object user

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

export interface User {
  name: string;
  password: string;
  token: Token;
}

export interface Token {
  expire: Date;
  token: string;
  success: boolean;
}

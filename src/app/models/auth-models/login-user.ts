import { Token } from './token';

export interface User {
  username: string;
  password: string;
  token: Token;
}

import { Token } from './token';

export interface User {
  name: string;
  password: string;
  token: Token;
}

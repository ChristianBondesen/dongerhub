import { User } from '../../models/auth-models/login-user';

export interface Post {
  data: string;
  owner: User;
}

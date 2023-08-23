import { UserEntity } from './user.entity';

export interface UserRepository<T> {
  getAll(): Promise<T[]>;
  create(user: UserEntity): Promise<T>;
}

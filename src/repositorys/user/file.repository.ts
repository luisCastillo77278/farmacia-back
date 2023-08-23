import { UserEntity, UserRepository } from '../../models';
import { v4 as uuid } from 'uuid';

import { UserSchema } from '../../models/user';

export class FileUserRepository implements UserRepository<UserEntity> {

	async getAll(): Promise<UserEntity[]> {
		return await UserSchema.getAll();
	}

	async create(user: UserEntity): Promise<UserEntity> {
		return await UserSchema.create({ ...user, id: uuid() });
	}

}
import { FileMemory } from '../FileMemory/FileMemory';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

export class UserShema implements UserRepository<UserEntity> {
	private db = new FileMemory('user');

	async getAll(): Promise<UserEntity[]> {
		return await this.db.getAll();
	}

	async create(user: UserEntity): Promise<UserEntity> {
		return this.db.create(user);
	}
}

export default new UserShema();
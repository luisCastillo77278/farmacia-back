import { UserEntity, UserRepository } from '../../models';
import { UserModel } from '../../models/user/user.model';

export class SequelizeRepository implements UserRepository<UserModel>{
	async getAll(): Promise<UserModel[]> {
		const users = await UserModel.findAll();
		return users;
	}

	async create(user: UserEntity): Promise<UserModel> {
		return await UserModel.create(user);
	}
}
import { UserEntity, UserRepository } from '../../models';
import UserModel, { UserDocument } from '../../models/user/user.schema';
import { v4 as uuid } from 'uuid';

export class MongoRepository implements UserRepository<UserDocument> {

	async getAll(): Promise<UserDocument[]> {
		return await UserModel.find();
	}

	async create(user: UserEntity): Promise<UserDocument> {
		const newUser = new UserModel({
			id: uuid(),
			...user
		});
		return await newUser.save();
	}

}
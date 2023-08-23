import { Request, Response } from 'express';
import { UserEntity, UserRepository } from '../models';
import { UserModel } from '../models/user/user.model';

export class UserController {

	public repos: UserRepository<UserEntity | UserModel>;

	constructor(repo: UserRepository<UserEntity | UserModel>) {
		this.repos = repo;
	}

	getUsers = async (_req: Request, res: Response) => {
		const users = await this.repos.getAll();
		res.json({
			users
		});
	};

	createUser = async (req: Request, res: Response) => {
		const { name, email } = req.body;
		const user: UserEntity = {
			name,
			email
		};
		const newUser = await this.repos.create(user);
		res.json({
			newUser
		});
	};

}
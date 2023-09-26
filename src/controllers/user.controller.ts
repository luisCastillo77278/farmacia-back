import { Request, Response } from 'express';
import { UserEntity, UserRepository } from '../models';
import { UserModel } from '../models/user/user.model';
import { UserDocument } from '../models/user/user.schema';

export class UserController {
  public repos: UserRepository<UserEntity | UserModel | UserDocument>;

  constructor(repo: UserRepository<UserEntity | UserModel | UserDocument>) {
    this.repos = repo;
  }

  getUsers = async (_req: Request, res: Response) => {
    const users = await this.repos.getAll();
    res.json({
      users,
    });
  };

  createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user: UserEntity = {
      name,
      email,
    };
    const newUser = await this.repos.create(user);
    res.json({
      user: newUser,
    });
  };
}


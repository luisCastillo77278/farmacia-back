import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { SequelizeRepository } from '../repositorys/user/sequelize.repository';
import { FileUserRepository } from '../repositorys/user/file.repository';
import { config } from 'dotenv';
import { MongoRepository } from '../repositorys/user/mongo.repository';

const router = Router();
config();

interface Database {
  [key: string]: SequelizeRepository | FileUserRepository
}

const DATABASE: Database = {
	'FileMemory': new FileUserRepository(),
	'MySQL': new SequelizeRepository(),
	'Mongo': new MongoRepository()
};

const repository = DATABASE[`${process.env.TYPE_DB}`] || DATABASE['FileMemory'];
const controller = new UserController(repository);

router.get('/', controller.getUsers);
router.post('/', controller.createUser);

export default router;
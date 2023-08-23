import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../models/user/user.model';
config();

export const MySqlConnection = async () => {
	try {
		const sequelize = new Sequelize({
			dialect: 'mysql',
			username: process.env.USERNAME,
			password: process.env.PASSW,
			host: process.env.HOST,
			database: process.env.DATABASE,
			models: [UserModel]
		});

		await sequelize.sync();
		await sequelize.authenticate();
		console.log('connnection mysql ready');
	} catch (error) {
		throw new Error('Error de conexion mysql');
	}
};

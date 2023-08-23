import express, { Express } from 'express';
import { config } from 'dotenv';
import { FileConnection, MySqlConnection, MongoConnection } from './connection';
import userRouter from './routes/user';

class Server {
	private app: Express;
	private port: number;
  
	constructor() {
		config();
		this.app = express();
		this.port = Number(process.env.PORT) || 3000;
		this.db();
		this.middlewares();
		this.routing();
	}

	async db() {
		if (process.env.TYPE_DB === 'Mongo') {
			await MongoConnection();
		} else if (process.env.TYPE_DB === 'MySQL') {
			await MySqlConnection();
		} else {
			await FileConnection();
		}

	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	private routing() {
		this.app.use('/user', userRouter);
	}

	listening() {
		this.app.listen(this.port, () => {
			console.log(`http://localhost:${this.port}`);
		});
	}
}

export default new Server();

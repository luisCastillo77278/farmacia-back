import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export const MongoConnection = async () => {
	try {
		await mongoose.connect(`${process.env.URI_DEV}`);
	} catch (error) {
		throw new Error('error connection mongo');
	}
};
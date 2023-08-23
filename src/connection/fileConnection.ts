import fs from 'fs';
import path from 'path';

export const pathFile = path.join(__dirname, '../db');

export const FileConnection = async () => {

	if (!fs.existsSync(pathFile)) {
		await fs.promises.mkdir(pathFile);
	}
};

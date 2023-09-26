import fs from 'fs';
import { pathFile } from '../../connection';
import path from 'path';

export class FileMemory<T> {
  private pathFileModel: string = '';

  constructor(model: string) {
    this.pathFileModel = path.join(pathFile, `${model}.json`);
  }

  async getAll(): Promise<T[]> {
    if (!fs.existsSync(this.pathFileModel)) {
      await fs.promises.writeFile(
        this.pathFileModel,
        JSON.stringify('[]', null, 2),
        { encoding: 'utf-8' }
      );
      return [] as T[];
    }

    const resp = await fs.promises.readFile(this.pathFileModel, {
      encoding: 'utf-8',
    });
    return JSON.parse(resp) as T[];
  }

  async create(user: T): Promise<T> {
    const users = await this.getAll();
    await fs.promises.writeFile(
      this.pathFileModel,
      JSON.stringify([...users, user], null, 2),
      { encoding: 'utf-8' }
    );
    return user;
  }
}

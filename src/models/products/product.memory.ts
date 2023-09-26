import { FileMemory } from '../FileMemory';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

export class ProductSchema implements ProductRepository<ProductEntity> {
  private db = new FileMemory<ProductEntity>('product');

  async getAll(): Promise<ProductEntity[]> {
    return await this.db.getAll();
  }

  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.create(product);
  }
}

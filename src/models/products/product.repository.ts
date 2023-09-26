import { ProductEntity } from './product.entity';

export interface ProductRepository<T> {
  getAll(): Promise<T[]>;
  create(product: ProductEntity): Promise<T>;
}

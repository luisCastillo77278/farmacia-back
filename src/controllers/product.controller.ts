import { ProductEntity } from '../models/products/product.entity';
import { ProductModle } from '../models/products/product.model';
import { ProductRepository } from '../models/products/product.repository';
import { Request, Response } from 'express';
import { ProductDocument } from '../models/products/product.schema';

export class ProductController {
  public repos: ProductRepository<
    ProductEntity | ProductModle | ProductDocument
  >;

  constructor(
    repos: ProductRepository<ProductEntity | ProductModle | ProductDocument>
  ) {
    this.repos = repos;
  }

  getProducts = async (_req: Request, res: Response) => {
    const products = await this.repos.getAll();
    res.json({ products });
  };

  createProduct = async (req: Request, res: Response) => {
    const { name, price } = req.body;
    const product: ProductEntity = {
      name,
      price,
    };
    const newProduct = await this.repos.create(product);
    res.json({ product: newProduct });
  };
}

import { Schema, model } from 'mongoose';
import { ProductEntity } from './product.entity';

export interface ProductDocument extends ProductEntity {}

const ProductSchema = new Schema<ProductDocument>({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

ProductSchema.set('toJSON', {
  transform: (_, object) => {
    return {
      id: object.id,
      name: object.name,
      price: object.price,
    };
  },
});

export default model<ProductDocument>('Product', ProductSchema);

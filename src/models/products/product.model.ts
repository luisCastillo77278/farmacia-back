import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { ProductEntity } from './product.entity';

@Table({ tableName: 'Product', timestamps: false })
export class ProductModle extends Model<ProductEntity> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
    id!: number;

  @Column
    name!: string;

  @Column
    price!: number;
}

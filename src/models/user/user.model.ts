import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';
import { UserEntity } from './user.entity';


@Table({ tableName: 'USER', timestamps: false })
export class UserModel extends Model<UserEntity> {
  @PrimaryKey
  @Column({
  	type: DataType.INTEGER,
  	autoIncrement: true
  })
  	id!: number;

  @Column
  	name!: string;

  @Column
  	email!: string;
}

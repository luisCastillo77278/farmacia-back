import { Schema, model } from 'mongoose';
import { UserEntity } from './user.entity';

export interface UserDocument extends UserEntity {}

const UserSchema = new Schema<UserDocument>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

UserSchema.set('toJSON', {
  transform: (_, object) => {
    return {
      name: object.name,
      email: object.email,
      id: object.id,
    };
  },
});

export default model<UserDocument>('User', UserSchema);

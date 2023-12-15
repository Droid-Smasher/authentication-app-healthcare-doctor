import mongoose, { Document, Schema } from 'mongoose';
import { IRole } from './Role';

export interface IUser extends Document {
  email: string;
  password: string;
  roles: IRole['_id'][];
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
});

export default mongoose.model<IUser>('User', UserSchema);

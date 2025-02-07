import mongoose, { Schema, Document } from 'mongoose';
import { roles } from '@/config/role';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[];
  profilePictureUrl?: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], enum: roles, required: true },
  profilePictureUrl: { type: String },
  refreshToken: { type: String },
  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model<IUser>('User', UserSchema);

import User, { IUser } from '../models/User';
// Import Role here to ensure it's registered before User model usage
import '../models/Role';
import { hashPassword, comparePassword } from '../utils/authUtils';
import { Error } from 'mongoose';

export default {
  createUser: async (userData: Omit<IUser, '_id'>): Promise<IUser> => {
    const { email, password, roles } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ email, password: hashedPassword, roles });
    await newUser.save();
    return newUser;
  },

  authenticateUser: async (email: string, password: string): Promise<IUser> => {
    const user = await User.findOne({ email }).populate('roles');
    if (!user) {
      throw new Error('User does not exist');
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  },
};

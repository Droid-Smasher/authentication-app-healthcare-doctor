import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'meow'; // INPUT_REQUIRED {choose a secure secret}

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (userId: string, roles: string[]): string => {
  return jwt.sign({ id: userId, roles: roles }, jwtSecret, { expiresIn: '1h' });
};

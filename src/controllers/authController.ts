import { Request, Response } from 'express';
import userService from '../services/userService';
import { generateToken } from '../utils/authUtils';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    const token = generateToken(user.id, user.roles);
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userService.authenticateUser(email, password);
    const token = generateToken(user.id, user.roles);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

import { Router } from 'express';
import { body } from 'express-validator';
import { register, login } from '../controllers/authController';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

router.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('roles').isArray().optional({ checkFalsy: true }),
    validateRequest,
  ],
  register
);

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
    validateRequest,
  ],
  login
);

export default router;

import { Router } from 'express';
import { pingController } from '../controllers/health';

const router = Router();

router.get('/', pingController);

export default router;

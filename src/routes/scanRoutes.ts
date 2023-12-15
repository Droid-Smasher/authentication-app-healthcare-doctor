import { Router } from 'express';
import { scanValidationMiddleware } from '../middleware/scanValidationMiddleware';

const router = Router();

router.post('/scan', scanValidationMiddleware, (req, res) => {
  // Handle the logic after successful scan validation, e.g., fetching patient details
  res.status(200).json({ message: 'QR code scanned successfully, access granted.' });
});

export default router;

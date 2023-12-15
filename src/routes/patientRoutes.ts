import { Router } from 'express';
import { generatePatientQRCode } from '../controllers/patientController';

const router = Router();

// Add middleware as needed, for example to check if the user has the correct role
router.get('/generate-qr/:patientId', generatePatientQRCode);

export default router;

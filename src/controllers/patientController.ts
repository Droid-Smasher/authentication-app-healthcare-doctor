import { Request, Response } from 'express';
import PatientRecord from '../models/PatientRecord';
import { generateQRCode } from '../utils/qrUtils';

export const generatePatientQRCode = async (req: Request, res: Response) => {
  try {
    const patientId = req.params.patientId;
    const patient = await PatientRecord.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const qrCode = await generateQRCode(patientId);
    patient.qrCode = qrCode;
    await patient.save();

    res.status(200).json({ message: 'QR Code generated successfully', qrCode });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

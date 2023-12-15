import { NextFunction, Request, Response } from 'express';
import PatientRecord from '../models/PatientRecord';

export const scanValidationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId, hospitalId } = req.body; // HospitalId needs to be known beforehand: either passed in the request or determined by server-side logic

  try {
    const patientRecord = await PatientRecord.findById(patientId).exec();
    if (!patientRecord) {
      return res.status(404).json({ message: 'Patient record not found' });
    }

    const isScanValid = patientRecord.hospital.equals(hospitalId); // Here we assume hospitalId is a MongoDB ObjectId
    if (!isScanValid) {
      return res.status(403).json({ message: 'QR code scan is not valid in this hospital' });
    }
    next(); // if everything is okay, proceed
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

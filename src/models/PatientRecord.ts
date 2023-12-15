import mongoose, { Document, Schema } from 'mongoose';

export interface IPatientRecord extends Document {
  name: string;
  mobileNumber: string;
  lastVisitDate: Date;
  medicalCondition: string;
  qrCode: string;
  hospital: mongoose.Types.ObjectId;
}

const PatientRecordSchema: Schema = new Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  lastVisitDate: { type: Date, required: true },
  medicalCondition: { type: String, required: true },
  qrCode: { type: String, required: true },
  hospital: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<IPatientRecord>('PatientRecord', PatientRecordSchema);

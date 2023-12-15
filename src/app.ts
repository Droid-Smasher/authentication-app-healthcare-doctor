import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import healthRoutes from './routes/health';
import authRoutes from './routes/authRoutes';
import patientRoutes from './routes/patientRoutes';
import scanRoutes from './routes/scanRoutes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ping', healthRoutes);
app.use('/auth', authRoutes);
app.use('/patient', patientRoutes);
app.use('/scan', scanRoutes);

export default app;

import dotenv from 'dotenv';
dotenv.config();

// Ensure Role model is registered before any operation that might use it
import './models/Role';

import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB(); // Connect to MongoDB
});

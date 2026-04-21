import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import contactRoutes from '#features/contact/contact.routes.js';
import careerRoutes from '#features/careers/careers.routes.js';
import adminRoutes from '#features/admin/admin.routes.js';
import servicesRoutes from '#features/services/services.routes.js';
import jobsRoutes from '#features/jobs/jobs.routes.js';
import aboutRoutes from '#features/about/about.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use('/api/', limiter);

let upload;
if (!process.env.VERCEL) {
  const uploadsRoot = path.join(__dirname, 'uploads');
  const resumesDir = path.join(uploadsRoot, 'resumes');
  fs.mkdirSync(resumesDir, { recursive: true });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadsRoot),
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });

  upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      const allowed = /pdf|doc|docx/;
      if (allowed.test(path.extname(file.originalname).toLowerCase())) cb(null, true);
      else cb(new Error('Only PDF, DOC, and DOCX files allowed'));
    },
  });
} else {
  upload = (req, res) =>
    res.status(501).json({ message: 'File uploads not supported on Vercel.' });
}

let isConnected = false;
async function connectMongo() {
  if (isConnected || !process.env.MONGODB_URI) return;
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = !!db.connections[0].readyState;
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
}
connectMongo();

app.use('/api/contact', contactRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/about', aboutRoutes);

app.get('/api/health', (_, res) =>
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: 'Something went wrong', error: err.message || err });
});

app.use('*', (req, res) => res.status(404).json({ message: 'Not found' }));

export default app;

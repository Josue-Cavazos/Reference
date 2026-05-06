import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './logger';

import { errorHandler, AppError } from './middleware/errorHandler';
import exampleRoutes from './routes/exampleRoutes';

// Create Express app
const app: Application = express();
const PORT = process.env.PORT || 3000;

// ==================== MIDDLEWARE ====================

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req: Request, _res: Response, next) => {
  logger.http(`${req.method} ${req.url}`);
  next();
});

// ==================== ROUTES ====================

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/examples', exampleRoutes);

// 404 handler - must be after all other routes
app.use((req: Request, _res: Response, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

// ==================== ERROR HANDLING ====================

// Global error handler - must be last
app.use(errorHandler);

// ==================== SERVER ====================

const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.info(`Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

export default app;

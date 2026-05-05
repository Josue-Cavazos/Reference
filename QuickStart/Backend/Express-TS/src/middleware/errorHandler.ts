import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

/**
 * Custom error class for operational errors
 * Use this for expected errors (validation, not found, unauthorized, etc.)
 */
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Global error handling middleware
 * This should be registered LAST in the Express middleware chain (after all routes)
 * 
 * Handles:
 * - Custom AppError instances (operational errors)
 * - Generic errors (500 Internal Server Error)
 * - Logs all errors with request context
 * - Returns stack traces only in development
 */
export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Don't handle if response already sent (prevents "headers already sent" error)
  if (res.headersSent) {
    return next(err);
  }

  // Default to 500 server error
  let statusCode = 500;
  let message = 'Internal Server Error';

  // Check if it's our custom error
  if (err instanceof AppError && err.isOperational) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Log the error with request context
  logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  logger.error(err.stack);

  // Send error response
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

/**
 * Async error wrapper utility
 * Wraps async route handlers to automatically catch errors and pass to error handler
 * 
 * Usage:
 * router.get('/users', catchAsync(async (req, res) => {
 *   const users = await userService.getAll();
 *   res.json(users);
 * }));
 */
export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
};

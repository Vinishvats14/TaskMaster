import { Request, Response, NextFunction } from 'express';
import ErrorLog from '../models/ErrorLog';

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  try {
    await ErrorLog.create({
      message,
      stack: err.stack,
      statusCode,
      method: req.method,
      url: req.originalUrl,
      userId: (req as any).userId
    });
  } catch (logError) {
    console.error('Failed to log error:', logError);
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

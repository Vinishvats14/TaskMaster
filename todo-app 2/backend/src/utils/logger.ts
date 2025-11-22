import ErrorLog from '../models/ErrorLog';

export const logError = async (
  message: string,
  statusCode: number,
  method: string,
  url: string,
  userId?: string,
  stack?: string
): Promise<void> => {
  try {
    await ErrorLog.create({
      message,
      stack,
      statusCode,
      method,
      url,
      userId
    });
  } catch (error) {
    console.error('Logger Error:', error);
  }
};

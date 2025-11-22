import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || '';
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    // Do not exit process here — keep server running for development
    // so the frontend can still connect and return meaningful errors.
    // In production you might want to exit or retry with backoff.
  }
};

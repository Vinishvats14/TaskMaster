import mongoose, { Document, Schema } from 'mongoose';

export interface IErrorLog extends Document {
  message: string;
  stack?: string;
  statusCode: number;
  method: string;
  url: string;
  userId?: string;
  timestamp: Date;
}

const ErrorLogSchema = new Schema<IErrorLog>({
  message: {
    type: String,
    required: true
  },
  stack: String,
  statusCode: {
    type: Number,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  userId: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IErrorLog>('ErrorLog', ErrorLogSchema);

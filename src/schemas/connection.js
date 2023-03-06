import { MONGODB_URI } from '@/config';
import { connect, model } from 'mongoose';

export const connectDB = () => connect(MONGODB_URI);
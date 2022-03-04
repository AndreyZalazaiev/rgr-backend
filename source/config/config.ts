import dotenv from 'dotenv';

dotenv.config();

export const HOSTNAME = process.env.HOSTNAME || 'localhost';
export const PORT = (process.env.PORT || 3333) as number;
export const MONGO_CONNECTION_STRING= process.env.CONNECTION_STRING || 'mongodb://localhost:27017';
export const FRONTEND_URL = process.env.FRONTEDN_URL || 'http://localhost:3000';

// test/setup.ts
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../configs/.env.s3');
dotenv.config({ path: envPath });

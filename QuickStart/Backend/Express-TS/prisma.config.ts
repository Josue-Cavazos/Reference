import { defineConfig } from 'prisma/config';
import path from 'node:path';
import dotenv from 'dotenv';

// Load .env from the project root (apps/backend)
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  schema: path.resolve(__dirname, 'prisma/schema.prisma'),
  migrations: {
    path: path.resolve(__dirname, 'prisma/migrations'),
  },
  datasource: {
    url: process.env['DATABASE_URL'],
  },
});

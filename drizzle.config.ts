import 'dotenv/config';
import type { Config } from 'drizzle-kit';

const config: Config = {
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!, 10) || 5432, // default port for PostgreSQL is 5432
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl:
      process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
  },
};

export default config;

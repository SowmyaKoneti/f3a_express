import { Pool } from 'pg';
// import { DB_PASSWORD } from '@/config';

const pool = new Pool({
  user: 'postgres',
  password: 'dummyPassword',
  host: 'localhost',
  port: 3000,
  database: 'f3a-database',
});

export const query = (text: string, params?: any) => pool.query(text, params);

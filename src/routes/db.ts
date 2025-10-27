import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'storefront',
  password: 'averysecretpassw0rd',
  port: 5432,
});

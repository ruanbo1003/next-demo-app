import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// for query purposes
const pg_database_url = process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://root:abc321@127.0.0.1/demo-app"
const queryClient = postgres(pg_database_url);
export const db = drizzle(queryClient);

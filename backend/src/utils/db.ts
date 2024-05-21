import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER || "db_user", // replace with your PostgreSQL user
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "todo_app",
  password: process.env.DB_PASSWORD || "db_password", // replace with your PostgreSQL password
  port: Number(process.env.DB_PORT || 5432),
  log: (...messages: any[]) => console.log(messages),
});

export default pool;

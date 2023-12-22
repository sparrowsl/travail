import { DATABASE_URL } from "$env/static/private";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schemas.js";

const sqlite = new Database(DATABASE_URL);
const db = drizzle(sqlite, { schema });

export default db;

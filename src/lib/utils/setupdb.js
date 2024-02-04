import argon2 from "argon2";
import Database from "better-sqlite3";
import "dotenv/config";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { usersTable } from "../server/models.js";

const sqlite = new Database(process.env.DATABASE_URL);
const db = drizzle(sqlite);

(async () => {
	try {
		await db.insert(usersTable).values({
			name: "Admin",
			username: "admin",
			email: "admin@mail.com",
			password: await argon2.hash("password"),
		});
	} catch (error) {
		console.log(error);
	}
})();

import "dotenv/config";

/** @type { import("drizzle-kit").Config } */
export default {
	schema: "./src/lib/server/models.js",
	driver: "better-sqlite",
	breakpoints: true,
	strict: true,
	out: "./drizzle",
	verbose: true,
	dbCredentials: {
		url: String(process.env.DATABASE_URL),
	},
};

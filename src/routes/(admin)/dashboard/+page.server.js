import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/models.js";
import { desc } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	async function getProperties() {
		return db.query.propertiesTable.findMany({
			limit: 5,
			orderBy: desc(propertiesTable.createdAt),
		});
	}

	return {
		properties: getProperties(),
	};
}

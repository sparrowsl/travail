import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/models.js";
import { desc } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	/** @type {import("$lib/types.js").Property[]} */
	let properties = [];
	try {
		properties = await db.query.propertiesTable.findMany({
			limit: 6,
			orderBy: desc(propertiesTable.dateAdded),
		});
	} catch (error) {
		console.log(error);
	}

	return { properties };
}

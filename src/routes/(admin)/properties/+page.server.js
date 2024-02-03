import db from "$lib/server/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const properties = await db.query.propertiesTable.findMany();

	return { properties };
}

import db from "$lib/server/db.js";
import { propertiesTable } from "$lib/server/schemas.js";
import { json } from "@sveltejs/kit";
import { desc } from "drizzle-orm";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const properties = await db.query.propertiesTable.findMany({
		orderBy: desc(propertiesTable.id),
	});
	return json({ properties });
}

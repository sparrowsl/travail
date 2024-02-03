import db from "$lib/server/db.js";
import { usersTable } from "$lib/server/schemas.js";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const agent = await db.query.usersTable.findFirst({
		where: eq(usersTable.id, params.id),
	});

	return { agent };
}

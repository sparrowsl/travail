import db from "$lib/server/db.js";
import { usersTable } from "$lib/server/models.js";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const user = await db.query.usersTable.findFirst({
		where: eq(usersTable.id, String(locals.user.id)),
	});

	return { currentUser: user };
}

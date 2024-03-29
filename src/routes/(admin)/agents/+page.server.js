import db from "$lib/server/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const agents = await db.query.usersTable.findMany({
		columns: {
			password: false,
		},
		with: {
			properties: {
				columns: {
					id: true,
				},
			},
		},
	});

	return { agents };
}

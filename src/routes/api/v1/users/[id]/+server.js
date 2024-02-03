import prisma from "$lib/server/prisma.js";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const user = await prisma.user.findUnique({
		where: { id: params.id },
		include: { properties: true },
	});
	return json({ user });
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH() {
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE() {
	return json({});
}

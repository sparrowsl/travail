import prisma from "$lib/server/prisma.js";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const property = await prisma.property.findUnique({
		where: { id: params.id },
		include: { user: { select: { avatar: true, email: true, name: true, id: true } } },
	});
	return json({ property });
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ params, request }) {
	console.log("updating property with id", params.id);
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ params }) {
	console.log("deleting property with id", params.id);
	return json({});
}

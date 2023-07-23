import prisma from "$lib/server/prisma.js";
import { error, json } from "@sveltejs/kit";

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
	try {
		await prisma.property.delete({ where: { id: params.id } });
		return json({});
	} catch (e) {
		throw error(400, "Could not delete property with that id");
	}
}

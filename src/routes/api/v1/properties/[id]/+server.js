import prisma from "$lib/server/prisma.js";
import { error, json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const property = await prisma.property.findUnique({
		where: { id: params.id },
		include: {
			user: { select: { avatar: true, email: true, name: true, id: true } },
		},
	});
	return json({ property });
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ params, request }) {
	const { title, location, description, price, photo, type } = await request.json();

	try {
		const property = await prisma.property.update({
			data: { title, location, description, price, photo, type },
			where: { id: params.id },
		});

		return json({ property });
	} catch (e) {
		console.log(e);
		error(400, "could not update this property");
	}
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ params }) {
	try {
		await prisma.property.delete({ where: { id: params.id } });
		return json({});
	} catch (e) {
		error(400, "Could not delete property with that id");
	}
}

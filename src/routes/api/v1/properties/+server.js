import { json, error } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const properties = await prisma.property.findMany({ orderBy: { id: "desc" } });
	return json({ properties });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, title, location, description, price, photo, type, userId } = await request.json();

	try {
		const property = await prisma.property.create({
			data: { id, title, location, description, price, photo, type, userId },
		});

		return json({ property });
	} catch (e) {
		console.log(e);
		throw error(400, "Could not create the property");
	}
}

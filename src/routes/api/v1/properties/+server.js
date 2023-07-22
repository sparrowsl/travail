import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const properties = await prisma.property.findMany({});
	return json({ properties });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log("adding a new property");
	return json({});
}

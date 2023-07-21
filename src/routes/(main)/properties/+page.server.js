import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	const properties = await prisma.property.findMany({});
	return { properties };
}

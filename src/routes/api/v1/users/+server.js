import prisma from "$lib/server/prisma.js";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const users = await prisma.user.findMany({
		select: {
			avatar: true,
			email: true,
			id: true,
			name: true,
			properties: { select: { type: true } },
		},
	});
	return json({ users });
}

/** @type {import('./$types').RequestHandler} */
export async function POST() {
	return json({});
}

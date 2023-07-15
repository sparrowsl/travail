import { json } from "@sveltejs/kit";
import { nanoid } from "nanoid";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { email, password } = await request.json();

	const user = await prisma.user.create({
		data: {
			email,
			password,
			fullname: "John Doe",
			id: nanoid(),
		},
	});
	return json(user);
}

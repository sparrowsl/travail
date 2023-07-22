import jwt from "jsonwebtoken";
import prisma from "$lib/server/prisma.js";
import { JWT_SECRET_KEY } from "$env/static/private";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const session = event.cookies.get("session");

	if (!session) return await resolve(event);

	/** @type {Object<any,any>} */
	let verifiedPayload;
	try {
		verifiedPayload = jwt.verify(session, JWT_SECRET_KEY);
	} catch (error) {
		return await resolve(event);
	}

	const user = await prisma.user.findUnique({
		where: { id: verifiedPayload?.id },
		select: { email: true, name: true, id: true, avatar: true },
	});

	if (user) event.locals.user = user;

	return await resolve(event);
}

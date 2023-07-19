import prisma from "$lib/server/prisma.js";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const session = event.cookies.get("session");

	if (!session) return await resolve(event);

	const user = await prisma.user.findUnique({
		where: { id: session },
		select: { email: true, name: true, id: true, avatar: true },
	});

	if (user) event.locals.user = user;

	return await resolve(event);
}

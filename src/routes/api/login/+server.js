import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { email, password } = await request.json();
	console.log({ email, password });
	return json({});
}

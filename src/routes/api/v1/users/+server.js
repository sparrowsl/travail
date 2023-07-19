import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	console.log("getting all users");
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log("adding a user");
	return json({});
}

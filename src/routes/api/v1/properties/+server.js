import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	console.log("getting all properties");
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log("adding a new property");
	return json({});
}
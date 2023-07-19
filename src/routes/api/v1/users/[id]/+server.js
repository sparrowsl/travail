import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	console.log("getting user with id", params.id);
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ params }) {
	console.log("updating user with id", params.id);
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ params }) {
	console.log("deleting user with id", params.id);
	return json({});
}

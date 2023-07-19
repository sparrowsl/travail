import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	console.log("getting property with id", params.id);
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ params }) {
	console.log("updating property with id", params.id);
	return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ params }) {
	console.log("deleting property with id", params.id);
	return json({});
}

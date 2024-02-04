import db from "$lib/server/db.js";
import { usersTable } from "$lib/server/models.js";
import argon2 from "argon2";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		// /** @type {import("$lib/types.js").Property} */
		// let result;
		// try {
		// 	result = createPropertySchema.parse(formData);
		// 	console.log({ result });
		// } catch (/** @type {any} */ e) {
		// 	const { fieldErrors: errors } = e.flatten();
		// 	console.log({ errors });
		// 	return { errors: Object.values(errors).flat() };
		// }

		console.log(formData);
		// /** @type {import("$lib/types.js").Agent} */
		// let agent;
		try {
			const agent = db
				.insert(usersTable)
				.values({
					name: formData.name,
					username: formData.username,
					email: formData.email,
					contact: formData.contact,
					password: await argon2.hash(String(formData.password)),
				})
				.returning()
				.get();
			console.log(agent);
		} catch (error) {
			console.log(error?.message);
			// if (!property) {
			return { errors: { message: "Can't create agent !!" } };
			// }
		}

		// redirect(307, "/properties");
	},
};

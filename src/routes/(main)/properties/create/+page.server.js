import { nanoid } from "nanoid";
import prisma from "$lib/server/prisma.js";
import { redirect } from "@sveltejs/kit";
import { createPropertySchema } from "$lib/utils/schemas.js";
import { uploadfile } from "$lib/utils/uploadFile.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = createPropertySchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		await prisma.property.create({
			data: {
				id: nanoid(),
				title: result.name,
				location: result.location,
				description: result.description,
				price: parseInt(result.price),
				photo: await uploadfile(result.photo),
				type: result.type.toString(),
				userId: result.id,
			},
		});

		throw redirect(307, "/properties");
	},
};

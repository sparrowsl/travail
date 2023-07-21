import { redirect } from "@sveltejs/kit";
import { nanoid } from "nanoid";
import prisma from "$lib/server/prisma.js";
import { registerSchema } from "$lib/utils/schemas.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(302, "/dashboard");
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, fetch, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = registerSchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		const user = await prisma.user.create({
			data: {
				id: nanoid(),
				email: result.email,
				password: result.password,
				name: result.name,
			},
		});

		if (!user) return { errors: { message: "Email already exists, could not create account!!" } };

		cookies.set("session", user.id, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 24 * 60 * 7,
		});

		throw redirect(302, "/dashboard");
	},
};
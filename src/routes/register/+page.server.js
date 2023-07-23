import { nanoid } from "nanoid";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { redirect } from "@sveltejs/kit";
import { JWT_SECRET_KEY } from "$env/static/private";
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

		const emailExist = await prisma.user.findUnique({ where: { email: result.email } });
		if (emailExist) return { errors: { email: ["Email already exists"] } };

		const user = await prisma.user.create({
			data: {
				id: nanoid(),
				email: result.email,
				password: await argon2.hash(result.password),
				name: result.name,
				avatar: `https://robohash.org/${result.name}`,
			},
		});

		if (!user) return { errors: { message: "Could not create account!!" } };

		const { password, ...userWithoutPassword } = user;

		const payload = jwt.sign(userWithoutPassword, JWT_SECRET_KEY);

		cookies.set("session", payload, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 24 * 60 * 7,
		});

		throw redirect(307, "/dashboard");
	},
};

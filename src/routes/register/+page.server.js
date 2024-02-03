import { JWT_SECRET_KEY } from "$env/static/private";
import db from "$lib/server/db.js";
import { usersTable } from "$lib/server/schemas.js";
import { registerSchema } from "$lib/utils/schemas.js";
import { redirect } from "@sveltejs/kit";
import argon2 from "argon2";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) {
		redirect(302, "/dashboard");
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = registerSchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		const emailExist = await db.query.usersTable.findFirst({
			where: eq(usersTable.email, result.email),
		});
		if (emailExist) {
			return { errors: { email: ["Email already exists"] } };
		}

		const user = await db
			.insert(usersTable)
			.values({
				id: nanoid(),
				email: result.email,
				password: await argon2.hash(result.password),
				name: result.name,
				avatar: `https://robohash.org/${result.name}`,
			})
			.returning()
			.get();

		if (!user) {
			return { errors: { message: "Could not create account!!" } };
		}

		const { password: _p, joined: _j, avatar: _a, ...rest } = user;
		const payload = jwt.sign(rest, JWT_SECRET_KEY);

		cookies.set("token", payload, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 24 * 60 * 7,
		});

		redirect(307, "/dashboard");
	},
};

import { JWT_SECRET_KEY } from "$env/static/private";
import db from "$lib/server/db.js";
import { usersTable } from "$lib/server/schemas.js";
import { loginSchema } from "$lib/utils/schemas.js";
import { redirect } from "@sveltejs/kit";
import argon2 from "argon2";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) {
		redirect(307, "/dashboard");
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = loginSchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();

			return {
				/**@type {String[]} */
				errors: Object.values(errors).flat(),
			};
		}

		const user = await db.query.usersTable.findFirst({
			where: eq(usersTable.email, result.email),
		});

		if (!(user && (await argon2.verify(user.password, result.password)))) {
			return { errors: { message: "Invalid email and password!! try again" } };
		}

		const { password: _p, avatar: _a, joined: _j, ...rest } = user;
		const payload = jwt.sign(rest, JWT_SECRET_KEY);

		cookies.set("token", payload, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 24 * 60 * 7,
		});

		redirect(307, "/dashboard");
	},

	// logout: async ({ cookies }) => {
	// 	cookies.set("token", "", { path: "/", expires: new Date(0) });
	// 	redirect(307, "/");
	// },
};

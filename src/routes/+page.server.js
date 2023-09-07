import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { redirect } from "@sveltejs/kit";
import { JWT_SECRET_KEY } from "$env/static/private";
import { loginSchema } from "$lib/utils/schemas.js";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(302, "/dashboard");
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request, fetch }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = loginSchema.parse(formData);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return { errors };
		}

		const user = await prisma.user.findUnique({
			where: { email: result.email },
			select: { id: true, password: true, email: true, name: true, avatar: true },
		});

		if (!user || !(await argon2.verify(user.password, result.password))) {
			return { errors: { message: "Invalid email and password!!, try again" } };
		}

		const { password, ...userWithoutPassword } = user;

		const payload = jwt.sign(userWithoutPassword, JWT_SECRET_KEY);

		cookies.set("session", payload, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 24 * 60 * 7,
		});

		redirect(307, "/dashboard");
	},

	logout: async ({ cookies }) => {
		cookies.set("session", "", { path: "/", expires: new Date(0) });
		throw redirect(307, "/");
	},
};

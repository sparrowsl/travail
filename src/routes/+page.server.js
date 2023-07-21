import { redirect } from "@sveltejs/kit";
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
			select: { password: true, id: true },
		});
		if (!user) return { errors: { message: "Invalid email and password!!, try again" } };

		cookies.set("session", user.id, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 24 * 60 * 7,
		});

		redirect(307, "/dashboard");
	},

	logout: async ({ cookies }) => {
		cookies.set("session", "", { path: "/" });
		throw redirect(307, "/");
	},
};

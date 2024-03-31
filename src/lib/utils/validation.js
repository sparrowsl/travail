import { z } from "zod";

export const propertySchema = z.object({
	id: z.string().optional(),
	userId: z.string().min(7).optional(),
	title: z.string().min(5, { message: "Title must be 5 or more letters" }).trim(),
	description: z
		.string()
		.min(5, {
			message: "Description about the house must be 5 or more letters",
		})
		.trim(),
	//@ts-ignore
	type: z.string(),
	price: z.number({ coerce: true }).refine((val) => val > 0, {
		message: "Price must be greater than 0!!",
	}),
	location: z
		.string()
		.min(5, { message: "Location of the house must be 5 or more letters" })
		.trim(),
	photo: z
		.any(z.instanceof(File, { message: "Please select a valid file!!" }))
		// .refine((file) => file.size > 0, { message: "Please select a file" })
		.optional(),
	updatedAt: z
		.date()
		.optional()
		.default(() => new Date()),
});

export const registerSchema = z.object({
	name: z.string().min(5, { message: "name must be 5 or more letters" }).trim(),
	email: z.string().email().min(5, { message: "email must be 5 or more letters" }),
	password: z.string().min(4, { message: "password must be 4 or more letters" }).trim(),
});

export const loginSchema = z
	.object({
		email: z.string().email().min(5, { message: "email must be 5 or more letters" }),
		password: z.string().min(4, { message: "password must be 4 or more letters" }).trim(),
	})
	.strict();

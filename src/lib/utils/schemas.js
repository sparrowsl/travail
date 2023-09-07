import { z } from "zod";
import { propertyTypes } from "./utils.js";

export const createPropertySchema = z.object({
	userId: z.string(),
	name: z.string().min(5, { message: "Name must be 5 or more letters" }).trim(),
	description: z.string().min(5, { message: "Description about the house must be 5 or more letters" }).trim(),
	// @ts-ignore
	type: z.nativeEnum(propertyTypes),
	price: z.string().refine((val) => parseInt(val) > 0, { message: "Price must be greater than 0!!" }),
	location: z.string().min(5, { message: "Location of the house must be 5 or more letters" }).trim(),
	photo: z
		.any(z.instanceof(File, { message: "Please select a valid file!!" }))
		.refine((value) => value.size > 0, { message: "Please select a file" }),
});

export const updatePropertySchema = z.object({
	propertyId: z.string(),
	name: z.string().min(5, { message: "Name must be 5 or more letters" }).trim(),
	description: z.string().min(5, { message: "Description about the house must be 5 or more letters" }).trim(),
	// @ts-ignore
	type: z.nativeEnum(propertyTypes),
	price: z.string().refine((val) => parseInt(val) > 0, { message: "Price must be greater than 0!!" }),
	location: z.string().min(5, { message: "Location of the house must be 5 or more letters" }).trim(),
	photo: z
		.any(z.instanceof(File, { message: "Please select a valid file!!" }))
		// .refine((value) => value.size > 0, { message: "Please select a file" })
		.optional(),
});

export const registerSchema = z.object({
	name: z.string().min(5, { message: "name must be 5 or more letters" }).trim(),
	email: z.string().email().min(5, { message: "email must be 5 or more letters" }),
	password: z.string().min(4, { message: "password must be 4 or more letters" }).trim(),
});

export const loginSchema = z.object({
	email: z.string().email().min(5, { message: "email must be 5 or more letters" }),
	password: z.string().min(4, { message: "password must be 4 or more letters" }).trim(),
});

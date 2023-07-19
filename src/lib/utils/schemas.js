import { z } from "zod";
import { propertyTypes } from "./utils.js";

export const createPropertySchema = z.object({
	name: z.string({}).min(5, { message: "Name must be 5 or more letters" }).trim(),
	description: z.string().min(5, { message: "Description about the house must be 5 or more letters" }).trim(),
	type: z.nativeEnum(propertyTypes),
	price: z.string().refine((val) => parseInt(val) > 0, { message: "Price must be greater than 0!!" }),
	location: z.string().min(5, { message: "Location of the house must be 5 or more letters" }).trim(),
	photo: z.any(z.instanceof(File)).refine((value) => value.size > 0, { message: "Please select a file" }),
});

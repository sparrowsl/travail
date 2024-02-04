export interface Property {
	id?: string;
	title: string;
	description: string;
	type: string;
	location: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	photo?: string | File | any | null;
	price: number;
	user?: User;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	userId?: string | null | any;
	createdAt?: Date | string | null;
	updatedAt?: Date | string | null;
}

export interface User {
	id?: string;
	name: string;
	username?: string;
	email: string;
	contact: string | null;
	avatar: string | null;
	role?: string | null;
	password: string;
	properties?: Property[];
	createdAt?: Date | string | null;
	updatedAt?: Date | string | null;
}

export interface Property {
	id?: string;
	title: string;
	description: string;
	type: string;
	location: string;
	photo: string;
	price: number;
	userId: string | null;
	user?: User;
}

export interface User {
	id?: string;
	name: string;
	email: string;
	avatar?: string | "https://robohash.org/johndoe" | null;
	password?: string;
	dateJoined?: Date | string | null;
	properties?: Property[];
}

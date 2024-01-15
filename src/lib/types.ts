export interface Property {
	id?: string;
	title?: string;
	description: string;
	type: string | number;
	location: string;
	photo: string;
	price: number;
	userId?: string | null;
	agentId?: string | null;
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

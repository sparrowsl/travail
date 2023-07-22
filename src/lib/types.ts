export interface Property {
	id: string;
	title: string;
	description: string;
	type: string;
	location: string;
	photo: string;
	price: number;
	userId: string | null;
	user?: any;
}

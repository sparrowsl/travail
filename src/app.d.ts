// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: String;
				name: String;
				email: String;
				avatar: String;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

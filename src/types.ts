import type { Document } from "mongoose";

export namespace IEntity {
	export interface Auth extends Document {
		name: string;
		username: string;
		password: string;
	}
	export interface Shop extends Document {
		name: string;
		number: number;
	}
}

export namespace Ichki {
	export interface Card extends Document {
		name: string;
		number: string;
		data: string;
		cvc: string;
	}
}

export namespace IUser {
	export interface User extends Document {
		name: string;

		username: string;
		email: string;
		card: Ichki.Card;

	}
}

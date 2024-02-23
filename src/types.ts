import type { Document } from "mongoose";

export namespace IEntity {
	export interface User extends Document {
		name: string;
		username: string;
		password: string;
	}
	export interface Shop extends Document {
		name: string;
		number: number;
	}
}


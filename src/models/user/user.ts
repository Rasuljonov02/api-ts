import mongoose from "mongoose";
import type { IEntity, IUser } from "types";

const UserSchema = new mongoose.Schema<IUser.User>({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	card: {
		name: {
			type: String,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
		expiryDate: {
			type: String,
			required: true,
		},
		cvc: {
			type: String,
			required: true,
		},
	},

});

export const User = mongoose.model<IUser.User>("User", UserSchema);

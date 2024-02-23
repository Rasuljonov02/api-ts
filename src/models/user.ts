import mongoose from "mongoose";
import type { IEntity } from "types";

const UserSchema = new mongoose.Schema<IEntity.User>({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model<IEntity.User>("user", UserSchema);

const name = "arslonbek";
const name1 = new String("arslonbek");

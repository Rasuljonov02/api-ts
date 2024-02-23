import mongoose from "mongoose";
import type { IEntity } from "types";

const AuthSchema = new mongoose.Schema<IEntity.Auth>({
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

export const Auth = mongoose.model<IEntity.Auth>("Auth", AuthSchema);

import { Schema, model } from "mongoose";

import { IUser } from "../../interface/User";

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
})

export default model<IUser>('User', userSchema)
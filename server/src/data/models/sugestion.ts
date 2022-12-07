import { Schema, model, Types } from "mongoose";

import { ISugestion } from "../../interface/Sugestion";

const { ObjectId } = Types

const sugestionSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    imageId: {
        type: String,
        required: true,
        trim: true
    },
    // user: {
    //     type: ObjectId,
    //     required: true
    // },
    price: {
        type: Number,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    stock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model<ISugestion>('Sugestion', sugestionSchema)
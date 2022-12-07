import { Document } from "mongoose";

export interface ISugestion extends Document {
    title: string;
    description: string;
    image: string;
    imageId: string;
    user: any;
    price: number;
    offer: string;
    stock: boolean;
    category: string;
    gender: string;
}
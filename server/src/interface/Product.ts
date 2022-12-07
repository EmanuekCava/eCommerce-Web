import { Document } from "mongoose";

export interface IProduct extends Document {
    title: string;
    description: string;
    image: string;
    imageId: string;
    user: any;
    price: number;
    stock: boolean;
    category: string;
    gender: string;
}
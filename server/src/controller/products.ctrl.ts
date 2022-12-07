import { Request, Response } from "express";
import fs from 'fs-extra'

import Product from '../data/models/product'
import { IProduct } from "../interface/Product";

import { cloudConnection } from "../images/cloud";

export const products = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showProducts = await Product.find()

        return res.status(200).json(showProducts)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const productsIndex = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showProductsIndex = await Product.find()

        const products = showProductsIndex.filter(product => product.category != 'footwear')

        return res.status(200).json(products)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const footwearIndex = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showFootwearIndex = await Product.find({ category: 'footwear' })

        return res.status(200).json(showFootwearIndex)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const product = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const showProduct = await Product.findById(id)

        return res.status(200).json(showProduct)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const productsCategory = async (req: Request, res: Response): Promise<Response> => {

    const { category } = req.params;

    try {

        const showProducts = await Product.find({ category: category })

        return res.status(200).json(showProducts)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const productsGender = async (req: Request, res: Response): Promise<Response> => {

    const { gender } = req.params;

    try {

        const showProducts = await Product.find({ gender })

        return res.status(200).json(showProducts)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const createProduct = async (req: any, res: Response): Promise<Response> => {

    const { title, description, price, stock, category, gender } = req.body;

    try {

        if(!req.file) {
            return res.status(400).json({ message: "Try to upload an image." })
        }

        const result = await cloudConnection.uploader.upload(req.file.path)

        const newProduct: IProduct = new Product({
            title,
            description,
            image: result.url,
            imageId: result.public_id,
            // user: req.user,
            price,
            stock,
            category,
            gender
        })

        const productSaved = await newProduct.save()

        await fs.unlink(req.file.path)

        return res.status(200).json(productSaved)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const removeProduct = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const product = await Product.findById(id)

        await cloudConnection.uploader.destroy(product?.imageId!)
        await Product.findByIdAndDelete(id)

        return res.status(200).json("Product was removed successfully.")

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const updateProduct = async (req: any, res: Response): Promise<Response> => {

    const { id } = req.params;
    const { title, description, price, stock, category, gender } = req.body;

    try {

        var product = await Product.findById(id)

        var upload;

        if (req.file) {

            const result = await cloudConnection.uploader.upload(req.file.path)

            upload = {
                title: title || product?.title,
                description: description || product?.description,
                image: result.url,
                imageId: result.public_id,
                price: price || product?.price,
                stock: stock || product?.stock,
                category: category || product?.category,
                gender: gender || product?.gender
            }

            await cloudConnection.uploader.destroy(product?.imageId!)
            await fs.unlink(req.file.path)

        } else {

            upload = {
                title: title || product?.title,
                description: description || product?.description,
                image: product?.image,
                imageId: product?.imageId,
                price: price || product?.price,
                stock: stock || product?.stock,
                category: category || product?.category,
                gender: gender || product?.gender
            }

        }

        const productUpdated = await Product.findByIdAndUpdate(id, {
            $set: upload
        },
            {
                new: true
            }
        )

        return res.status(200).json(productUpdated)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}
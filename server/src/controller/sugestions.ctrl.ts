import { Request, Response } from "express";
import fs from 'fs-extra'

import Sugestion from '../data/models/sugestion'
import { ISugestion } from "../interface/Sugestion";

import { cloudConnection } from '../images/cloud';

export const sugestions = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showSugestions = await Sugestion.find()

        return res.status(200).json(showSugestions)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const sugestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const showSugestion = await Sugestion.findById(id)

        return res.status(200).json(showSugestion)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const sugestionsCategory = async (req: Request, res: Response): Promise<Response> => {

    const { category } = req.params;

    try {

        const showSugestions = await Sugestion.find({ category: category })

        return res.status(200).json(showSugestions)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const createSugestion = async (req: any, res: Response): Promise<Response> => {

    const { title, description, price, offer, stock, category, gender } = req.body;

    try {

        if (!req.file) {
            return res.status(400).json({ message: "Try to upload an image." })
        }

        const result = await cloudConnection.uploader.upload(req.file.path)

        const newSugestion: ISugestion = new Sugestion({
            title,
            description,
            image: result.url,
            imageId: result.public_id,
            price,
            offer,
            stock,
            // user: req.user,
            category,
            gender
        })

        const sugestionSaved = await newSugestion.save()

        await fs.unlink(req.file.path)

        return res.status(200).json(sugestionSaved)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const removeSugestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const sugestion = await Sugestion.findById(id)

        await cloudConnection.uploader.destroy(sugestion?.imageId!)
        await Sugestion.findByIdAndDelete(id)

        return res.status(200).json("Sugestion was removed")

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const updateSugestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    const { title, description, price, stock, category, gender } = req.body;

    try {

        var sugestion = await Sugestion.findById(id)

        var upload;

        if (req.file) {

            const result = await cloudConnection.uploader.upload(req.file.path)

            upload = {
                title: title || sugestion?.title,
                description: description || sugestion?.description,
                image: result.url,
                imageId: result.public_id,
                price: price || sugestion?.price,
                stock: stock || sugestion?.stock,
                category: category || sugestion?.category,
                gender: gender || sugestion?.gender
            }

            await cloudConnection.uploader.destroy(sugestion?.imageId!)
            await fs.unlink(req.file.path)

        } else {

            upload = {
                title: title || sugestion?.title,
                description: description || sugestion?.description,
                image: sugestion?.image,
                imageId: sugestion?.imageId,
                price: price || sugestion?.price,
                stock: stock || sugestion?.stock,
                category: category || sugestion?.category,
                gender: gender || sugestion?.gender
            }

        }

        const sugestionUpdated = await Sugestion.findByIdAndUpdate(id, {
            $set: upload
        },
            {
                new: true
            }
        )

        return res.status(200).json(sugestionUpdated)

    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}

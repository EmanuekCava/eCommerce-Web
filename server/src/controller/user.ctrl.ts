import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../data/models/user'
import { IUser } from '../interface/User';

const { JWT } = process.env;

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find();

        return res.status(200).json(showUsers)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const createuser = async (req: Request, res: Response): Promise<Response> => {

    const { email, password, role } = req.body;

    const user = await User.findById(req.user)

    if(user?.role != 'admin') {
        return res.status(401).json({ message: "You cannot create users" })
    }

    const salt = await bcrypt.genSalt(8)
    const pass = await bcrypt.hash(password, salt)

    try {

        const newUser: IUser = new User({
            email,
            password: pass,
            role
        })

        const token: string = jwt.sign({ id: newUser._id }, `${JWT}`)

        const savedUser = await newUser.save();

        return res.status(200).json({
            user: savedUser,
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    try {

        if(!email || !password) {
            return res.status(400).json({ message: "There are empty fields" })   
        }

        const user = await User.findOne({ email: email })

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const validation = await bcrypt.compare(password, user.password)        

        if(!validation) {
            return res.status(400).json({ message: "Fields do not match" })
        }

        const token: string = jwt.sign({ id: user._id }, `${JWT}`)

        return res.status(200).json({
            user,
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const user = await User.findById(req.user)

        if(user?.role != 'admin') {
            return res.status(200).json({ message: "You cannot remove users" })
        }

        await User.findByIdAndDelete(id)

        return res.status(200).json({message: "User was removed" })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}
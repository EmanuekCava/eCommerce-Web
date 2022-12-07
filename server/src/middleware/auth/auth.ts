import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IValidation } from 'interface/Validation';
import User from '../../data/models/user';

const { JWT } = process.env

const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if(!token) {
        return res.status(500).json({ message: "Token does not exists" })
    }

    const validation = jwt.verify(token, `${JWT}`) as IValidation

    if(!validation) {
        return res.status(500).json({ message: "Token is not valid" })
    }

    req.user = validation.id

    const user = await User.findById(req.user)

    if(!user) {
        return res.status(500).json({ message: "User does not exists" })
    }

    next()

}

export default auth
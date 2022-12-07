import { Request, Response, NextFunction } from "express";

import User from '../../data/models/user'

const userValid = async (req: Request, res: Response, next: NextFunction) => {

    const { email, password, confirm, role } = req.body;

    try {

        if(!email || !password || !confirm || !role) {
            return res.status(400).json({ message: "There are empty fields" })
        }

        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be more than 6 characters" })
        }

        if(password != confirm) {
            return res.status(400).json({ message: "Passwords do not match" })
        }

        const user = await User.findOne({ email: email })

        if(user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const validEmail = validateEmail(email)

        if(!validEmail) {
            return res.status(400).json({ message: "Email no valid" })
        }
        
        next();
        
    } catch (error) {
        console.log(error);
    }

}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default userValid
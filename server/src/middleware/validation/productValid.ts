import { Request, Response, NextFunction } from "express";

const productValid = (req: Request, res: Response, next: NextFunction) => {

    const { title, description, price, stock, category, gender } = req.body;

    const genders = ["male", "female"];
    const categories = ["winter", "summer", "footwear", "shirts aand dresses", "sportswear", "t-shirts", "pants"];

    try {

        if(!title || !price || !stock || !category || !gender) {
            return res.status(400).json({ message: "Try to write a title, price, stock and category" })
        }

        if(title.length >= 30) {
            return res.status(400).json({ message: "Try that your title will be less than 30 characters." })
        }

        if(description.length >= 100) {
            return res.status(400).json({ message: "Try that your description will be less than 100 characters." })
        }

        var genderFound = false;
        var categoryFound = false;

        for(var i = 0; i < genders.length; i++) {
            if(gender == genders[i]) {
                genderFound = true;
                break;
            }
        }
    
        if(!genderFound) {
            return res.status(400).json({ message: "That gender does not exists. Try to write \"male\" or \"female\"." })
        }

        for(var i = 0; i < categories.length; i++) {
            if(category == categories[i]) {
                categoryFound = true;
                break;
            }
        }

        if(!categoryFound) {
            return res.status(400).json({ message: "That category does not exists." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default productValid
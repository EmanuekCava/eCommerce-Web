import mongoose from 'mongoose'

const { HOST, DATABASE } = process.env;

(async () => {

    try {
        
        await mongoose.connect(`mongodb://${HOST}/${DATABASE}`)

        console.log("Database is running");
        
    } catch (error) {
        console.log(error);
    }

})()
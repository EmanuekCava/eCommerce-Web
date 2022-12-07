import cloudinary from 'cloudinary'

export const cloudConnection = cloudinary.v2;

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudConnection.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})


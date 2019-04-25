const cloudinary = require("cloudinary")
const cloudinaryStorage = require("multer-storage-cloudinary")
const multer = require("multer")

// add your name, key and secret to the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  // name on cloudinary 
  folder: "user-pictures"

  // you only need this to upload files other than images 
  // params : {
  //   resource_type : "raw"
  // }
})

const fileUploader = multer({ storage })
module.exports = fileUploader
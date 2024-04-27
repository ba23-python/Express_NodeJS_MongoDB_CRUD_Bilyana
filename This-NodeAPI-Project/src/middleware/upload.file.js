// gestion y validacion de los ficheros
const multer = require("multer")
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")

// permite subir a cloudinary las imagenes previamente validadas con el multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "studentFullStack",
        allowedFormats: ["jpg", "png", "svg", "gif", "jpeg"]
    }
})

// subo la imagen que cumpla con los  parametros definidos
const upload = multer({ storage });
module.exports = upload;
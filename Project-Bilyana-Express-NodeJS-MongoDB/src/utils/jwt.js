const jwt = require("jsonwebtoken")

const generateToken = (data) => {
    //data, informacion a guardar en el token
    //secreteKeyPepino , clave secreta que me invento
    //{ expiresIn: '1h' } tiempo de duracion del token
    return jwt.sign(data, process.env.SECRET_JWT, { expiresIn: '1h' })
}
const verifyToken = (token) => {
    console.log(token)
    return jwt.verify(token, "secreteKeyPepino")

}

module.exports = { generateToken, verifyToken }
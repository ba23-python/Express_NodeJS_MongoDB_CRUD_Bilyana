const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { validateEmailDB, validatePassword } = require('../../utils/validator');
const { generateToken } = require("../../utils/jwt")

const register = async (req, res) => {
  try {
    // creo el documento del usuario
    const userDoc = new User(req.body);
    console.log(req.body);
    // si recibo de cloudinary la ruta de la imagen  se la asigno a la propiedad image de nuevo documento
    /* if (req.file.path) {
       userDoc.image = req.file.path;
     }*/
    //validaciones
    //1.- El usuario no exista. (email)
    const valEmail = await validateEmailDB(req.body.email);
    console.log(valEmail); // devuelve null si no se encuentra  en la BD
    if (!valEmail) {
      // valEmail === null
      //2.- La contraseña cumpla el patron requerido (regex)
      const valPassword = validatePassword(req.body.password);
      if (valPassword) {
        //3.- Encriptar la contraseña  antes de registrarme  HASH
        userDoc.password = bcrypt.hashSync(userDoc.password, 10);
        const createdUser = await userDoc.save();
        return res.status(200).json({ success: true, data: createdUser });
      } else {
        return res.status(200).json({
          success: false,
          message: 'La contraseña no cumple con el patron indicado',
        });
      }
    }
    return res
      .status(200)
      .json({ success: false, message: 'El email ya está registrado' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const userBody = req.body;
    const userDB = await validateEmailDB(userBody.email)
    if (!userDB) {
      return res.status(200).json({ succe: false, message: "El email no está registrado" })
    }
    if (!bcrypt.compareSync(userBody.password, userDB.password)) {
      return res.status(200).json({ succes: true, message: "contraseña invalida" })
    }
    //generar el token
    const token = generateToken({
      name: userDB.name,
      email: userDB.email,
      _id: userDB._id,
    })
    return res.status(200).json({ success: true, token: token })

  } catch (error) {
    return res.status(500).json(error);
  }
}

const modifyProfile = async (req, res) => {
  console.log("funcion de modificar")
  console.log(req.userProfile); // es el usuario con los datos correspondiente al token
  const newUser = new User(req.body);
  newUser.password = bcrypt.hashSync(req.body.password, 10)
  newUser._id = req.userProfile._id
  console.log(newUser)
  const updateUser = await User.findByIdAndUpdate(req.userProfile._id, newUser, { new: true })
  return res.status(200).json({ data: updateUser })
}

module.exports = { register, login, modifyProfile };

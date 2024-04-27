const User = require('../api/models/user.model');

const validateEmailDB = async (emailUser) => {
  try {
    const validateEmail = await User.findOne({ email: emailUser });
    return validateEmail;
  } catch (error) {
    console.log(error);
  }
};

const validatePassword = (pass) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // 1 mayuscula, 1 minuscula,  minimo 8
  return regex.test(pass); // test devuelve true o false
};

module.exports = { validateEmailDB, validatePassword };

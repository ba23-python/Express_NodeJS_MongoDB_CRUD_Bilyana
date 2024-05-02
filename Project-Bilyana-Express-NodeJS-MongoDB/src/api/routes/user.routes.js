const express = require('express');
const router = express.Router();
const { register, login, modifyProfile, getUsers } = require('../controllers/user.controller');
const { isAuth } = require("../../middleware/auth")

const upload = require("../../middleware/upload.file")
router.post('/register', register);
router.post('/login', login);
router.put('/update', [isAuth], modifyProfile)
router.get("/alluser", [isAuth], getUsers )

module.exports = router;
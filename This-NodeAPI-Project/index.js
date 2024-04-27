//import de dependecias y archivos
const express = require('express');
const { connectDB } = require('./src/utils/database');
const routerUser = require('./src/api/routes/user.routes');
const env = require("dotenv")
const cloudinary = require("cloudinary").v2;
const cors = require("cors")

env.config() // para trabajar con variables de entorno
// configuración del servidor

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUD,
  api_secret: process.env.API_SECRET_CLOUD
})
const server = express();
server.use(express.json());
connectDB();
server.use(cors())
server.use('/user', routerUser);

//ejecucion del servidor
const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});

//import de dependecias y archivos siempre lo mismo
const express = require('express');
const { connectDB } = require('./src/utils/database');
//va cambiando segun la ruta que quieres nombrar, aqui es product
const routerProducts = require("./src/api/routes/product.routes");

const orderRoutes = require("./src/api/routes/order.routes");



// configuración del servidor siempre lo mismo
const server = express();
server.use(express.json());

connectDB();

//routerProducts se va a llamar distinto

server.use("/", routerProducts);
server.use("/", orderRoutes);

//ejecucion del servidor siempre lo mismo
const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
const uri =
  'mongodb+srv://belaenergetica:Bily2024@cluster0.kuraym5.mongodb.net/upgradeHub?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD  ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };

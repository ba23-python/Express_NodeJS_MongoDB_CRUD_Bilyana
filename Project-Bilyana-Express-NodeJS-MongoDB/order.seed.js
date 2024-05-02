const mongoose = require('mongoose');
const Order = require('./src/api/models/order.model');

const orders = [
    { product: 'TestProduct', quantity: 100, totalPrice: 3500 },
    { product: 'TVset', quantity: 100, totalPrice: 1500 },
    { product: 'Furniture', quantity: 80, totalPrice: 1500 },
];
const ordersDocument = orders.map((dr) => new Order(dr)); // Change 'order' to 'Order'

mongoose.connect('mongodb+srv://belaenergetica:Bily2024@cluster0.kuraym5.mongodb.net/upgradeHub?retryWrites=true&w=majority&appName=Cluster0')
  .then(async () => {
    const ordersDB = await Order.find();
    if (ordersDB.length !== 0) {
      await Order.collection.drop();
    }
  })
  .catch((err) => console.log(err))
  .then(async () => {
    await Order.insertMany(ordersDocument);
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());


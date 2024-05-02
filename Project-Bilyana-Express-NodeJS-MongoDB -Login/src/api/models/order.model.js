const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' }, // Reference to the Product model
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User model
    quantity: { type: Number },
    totalPrice: { type: Number }
    // Other fields as needed
});



const Order = mongoose.model('order', orderSchema);
module.exports = Order 

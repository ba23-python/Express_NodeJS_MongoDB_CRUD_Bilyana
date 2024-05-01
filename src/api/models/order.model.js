const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
    
});

module.exports = mongoose.model("Order", orderSchema);

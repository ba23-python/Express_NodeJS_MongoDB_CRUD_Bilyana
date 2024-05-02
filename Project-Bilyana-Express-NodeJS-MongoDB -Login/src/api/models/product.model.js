const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    product: { type: String, require: true },
    color: { type: String },
    model: { type: Number },
    availability: { type: Boolean },
    quantity: { type: Number },
    price: { type: Number },
    
},
    {
        collection: "product"
    }
)
const Product = mongoose.model("product", productSchema)
module.exports = Product;

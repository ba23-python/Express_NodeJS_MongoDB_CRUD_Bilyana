const Order = require("../models/order.model");

const addOrder = async (req,res) => {
    try {
        console.log(req.body);
        const newOrder = new Order (req.body);
        const createdOrder = await newOrder.save();
        return res.json(createdOrder);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = {addOrder};
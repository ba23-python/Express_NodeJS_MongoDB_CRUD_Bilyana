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

const selectOrder = async (req, res) => {
    try {
        // Retrieve all orders from the database
        const orders = await Order.find();
        return res.json(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const selectOneOrder = async (req, res) => {
    try {
        const { id } = req.params;
        // Retrieve the order with the specified ID from the database
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.json(order);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { /* Update fields */ } = req.body;
        // Find the order by ID and update it in the database
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.json(updatedOrder);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        // Find the order by ID and delete it from the database
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


module.exports = {addOrder, selectOrder, selectOneOrder, updateOrder, deleteOrder};
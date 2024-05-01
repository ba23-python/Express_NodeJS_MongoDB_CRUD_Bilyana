
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

// Create
router.post("/", orderController.createOrder);

// Read (All orders)
router.get("/", orderController.selectOrder);

// Read (One order by ID)
router.get("/:id", orderController.selectOneOrder);

// Update
router.put("/:id", orderController.updateOrder);

// Delete
router.delete("/:id", orderController.deleteOrder);

module.exports = router;






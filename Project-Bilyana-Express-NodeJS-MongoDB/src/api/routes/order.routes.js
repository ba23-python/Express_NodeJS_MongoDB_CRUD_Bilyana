
const express = require("express");
const router = express.Router();

const { addOrder, selectOrder, selectOneOrder, updateOrder, deleteOrder } = require("../controllers/order.controller")

router.post("/add", addOrder);
router.get("/select", selectOrder);
router.get("/selectOrder/:id", selectOneOrder)
router.put("/update/:id", updateOrder)
router.delete("/delete/:id", deleteOrder)

module.exports = router;






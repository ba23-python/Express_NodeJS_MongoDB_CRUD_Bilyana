const express = require("express");
const router = express.Router();

const { addProduct, selectProduct, selectOneProduct, updateProduct, deleteProduct } = require("../controllers/product.controller")

router.post("/add", addProduct);
router.get("/select", selectProduct);
router.get("/selectproduct/:id", selectOneProduct)
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

module.exports = router;

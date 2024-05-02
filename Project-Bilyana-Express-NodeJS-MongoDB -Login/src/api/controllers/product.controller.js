const Product = require("../models/product.model")

//const addProduct = async (req, res) => {
    //const newProduct = new Product(req.body)
   // const createdProduct = await newProduct.save();
    //return res.json(createdProduct)
//}

//version mejorada de addProduct abajo

const addProduct = async (req, res) => {
    try {
        console.log(req.body)
        const newProduct = new Product(req.body)
        const findProduct = await Product.find({ name: req.body.name })
        console.log(findProduct)
        if (findProduct.length !== 0) {
            return res.json({ message: "Esta ya está registrada" })
        }
        const createdProduct = await newProduct.save();
        return res.json(createdProduct)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


const selectProduct = async (req, res) => {
    const products = await Product.find();
    return res.status(200).json(products)
}
const selectOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const findProduct = await Product.find({ _id: id })
        return res.status(200).json(findProduct)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productBody = new Product(req.body)
        productBody._id = id;
        const updateProduct = await Product.findByIdAndUpdate(id, productBody, { new: true })
        console.log(updateProduct)
        if (!updateProduct) {
            return res.status(404).json({ message: "Producto no existe" })
        }
        return res.status(200).json(updateProduct)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).json({ message: "Producto no existe" })
        }
        return res.status(200).json(deleteProduct)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}

module.exports = { addProduct, selectProduct, selectOneProduct, updateProduct, deleteProduct }

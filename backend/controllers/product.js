import product from "../models/product.js"

export const getProduct = async (req,res) => {
    try {
        const products = await product.find()
        console.log(products)
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createProduct = async (req,res) => {
    const prod = req.body
    const newProduct = new product(prod)

    try {
        await newProduct.save()
        res.status(201).json(newProduct)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
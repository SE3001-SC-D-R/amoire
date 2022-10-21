import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    Name: String,
    Description: String,
    Category: String,
    Price: Number,
    selectedImage: String,
    stock: Number
})

const product = mongoose.model('Product',productSchema);
export default product
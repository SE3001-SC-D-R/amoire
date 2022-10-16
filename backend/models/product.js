import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    Name: String,
    Description: String,
    Category: String,
    Company: String,
    Price: Number,
    selectedImage: String
})

const product = mongoose.model('Product',productSchema);
export default product
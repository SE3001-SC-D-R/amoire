 /**
* This is a basic starting point of the assignment
* Modify the code according to your own needs and requirements
*/

import express from 'express'; // <-- Module Style import
import mongoose from 'mongoose';

// // Importing route
import productRouter from './routes/productRoutes.js';
import Product from './models/productModel.js';

const connectionURL = 'mongodb+srv://root:root@cluster0.l2i8oag.mongodb.net/armoire?retryWrites=true&w=majority'
mongoose
.connect(connectionURL)
.then(() => console.log("Mongodb connected to - successfully!"))
.catch((err) => {
    console.log(err);
  });


 const app = express()
 const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.use('/getProducts', productRouter);
 app.use('/create', productRouter);
 app.use('/update', productRouter);

 app.delete('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Products deleted'))
    .catch(err => res.status(400).json('Error: '+err))
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
// Importing user route

import router from './routes/product.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001;


app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

const connectionURL = ''

mongoose.connect(connectionURL)


// Adding a Router
app.use('/product', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
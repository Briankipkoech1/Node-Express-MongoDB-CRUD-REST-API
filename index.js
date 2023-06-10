
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const Product=require('./model/product')

const app = express();
const port = 3000;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db=mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open', ()=>console.log('connected to db'))

app.use(express.json())



const productRoutes=require('./routes/productRoutes')
app.use('/', productRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});






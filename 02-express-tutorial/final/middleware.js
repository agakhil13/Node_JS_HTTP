const express = require('express')
const app = express()
const {logger} = require('../loggers')
const authorize = require('./authorize')
const morgan = require('morgan')

// app.use( [authorize, logger] )
app.use(morgan('tiny'))

app.get('/',(req, res)=>{
    res.send(`Home Page`)
})

app.get('/about',(req, res)=>{
    res.send('About Page')
})

app.get('/product',(req, res)=>{
    res.send('Product')
})
app.listen(5000, ()=>{
    console.log(`http://localhost:5000`);
})
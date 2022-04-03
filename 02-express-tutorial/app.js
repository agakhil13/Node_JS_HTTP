const express = require('express')
const app = express()
let {people} = require('./data.js')
const path = require('path')
const exp = require('constants')
app.use(express.static(path.resolve(__dirname,'./methods-public')))
//parse form data
app.use(express.urlencoded({extended: false}))
app.get('/api/people', (req, res)=>{
    res.status(200).json({ success: true, data:people })
})

app.post('/login',(req,res)=>{
    const {name} = req.body
    if (name) {
        res.send(`Hello ${name}`)
    }
})
app.listen(5000, ()=>{
    console.log(`http://localhost:5000`)
})
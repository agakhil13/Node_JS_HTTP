const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname,`./public`)))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//placed in public directory 


app.all('*',(req, res) => {
        res.status(404).send('Page Not Found')
    })

app.listen(5050,()=>{
    console.log(`http://localhost:5050`)
})
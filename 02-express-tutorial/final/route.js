const express = require('express')
const app = express()
const {products, people} = require('./data.js')


app.get('/', (req,res)=>{
    res.send(`<center><p style="font-size:50px;font-weight:bold;">Home Page</p>
    <a style="font-size:35px;" href="/api/products/">Products</a> &nbsp;
    <a style="font-size:35px;" href="/api/people">People</a>
    </center>
    `)
})
app.get('/api/products/', (req, res)=>{
    const newProduct = products.map((product)=>{
        const{id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProduct)
})
app.get('/api/products/:productID', (req, res)=>{
    const {productID} = req.params 
    const newProduct = products.find((product)=>
        product.id === Number(productID)
    )
    if(!newProduct){
        return res.status(404).send('<h3>Product not available</h3>')
    }
    return res.json(newProduct)
})

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProduct = [...products]
    
    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }
    if (sortedProduct.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] })
      }
    res.status(200).json(sortedProduct)
})
app.get('/api/people/', (req, res)=>{
    res.json(people)
})
app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Page Not Found 404</h1>`)
})

app.listen(5000, ()=>{
    console.log(`http://localhost:5000`);
})
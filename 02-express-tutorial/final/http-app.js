const http = require('http')
const fs = require('fs')

// const homepage = fs.readFileSync(`${__dirname}/navbar-app/index.html`,'utf-8') 
const homePage = fs.readFileSync(`./navbar-app/index.html`) 
const homeStyle = fs.readFileSync(`./navbar-app/styles.css`) 
const homeImage = fs.readFileSync(`./navbar-app/logo.svg`) 
const homeLogic = fs.readFileSync(`./navbar-app/browser-app.js`) 
const server = http.createServer((req, res)=>{

    // console.log(req.url);
    //homepage
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    //about
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //styles
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }
    //logic
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //image/logo
    else if(req.url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(5000,()=>{
    console.log(`http://localhost:5000`)
})
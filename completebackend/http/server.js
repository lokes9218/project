// const http=require('http')
// const server=http.createServer((req,res)=>{
//     const url=req.url
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end('Hello World\n')
//     if (url==='/'){
//         // console.log('home page')
//         res.writeHead(200,{'content-type':'text/plain'})
//     res.end('Home page\n')
//     }
//     if (url==='/pages'){
//         // console.log('home page')
//         res.writeHead(404,{'content-type':'text/plain'})
//     res.end('this page is not found\n')
//     }
// });
// port=3000

// server.listen(port,()=>{
//     console.log('Server is running on port '+port)
// });



const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Home page\n')
    } 
    else if (url === '/pages') {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('This page is not found\n')
    } 
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello World\n')
    }
})

const port = 3000

server.listen(port, () => {
    console.log('Server is running on port ' + port)
})


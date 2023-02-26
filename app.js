const http = require ('http')
const fs  = require( 'fs')

const server =http.createServer ((req,res)=>{
    const url =req.url
    const method =req.method
    if(url ==='/') {
        res.write('<html><body> <form action ="/message" method="POST" > <input type="text" name="message" /> <button type="submit" > send </button>  </form></body></html>')
        return res.end()
    }
    if (url === "/message" && method === "POST") {
        // stream  && buffer 
        const body =[]
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
       return req.on('end' , ()=> {
            const parsedBody =Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFileSync( 'message.txt' , message, (err)=>{
                if(!err) {
                    res.statusCode = 302
                }
                else {
                    res.statusCode = 404
                }
                res.setHeader('Location', '/')
                return res.end()
            })
        })
      
    }
     res.setHeader('Content-Type', 'text/html')
    
})

server.listen(3000)
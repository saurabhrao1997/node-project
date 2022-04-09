const http = require("http");
const url =require("url")


const server = http.createServer((req,res)=>{

    const objurl = url.parse(req.url,true)

    const obj = objurl.query.object
    const metric = objurl.query.metric
    const radius = objurl.query.radius

   let value ="";
    if(obj == "circle"){
        value = Math.PI * radius*radius;
    }else if(obj == "sphere"){
        value = (4/3)*Math.PI* radius*radius *radius;
    }


    if(objurl.pathname =="/metrics"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>${metric} of ${obj} is =: ${value}</h1>`)
        res.end();
    }else {
        res.end("404 page is not available")
    }
})

server.listen(8080,()=>{
    console.log("port working")
})
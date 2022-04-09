const { Console } = require("console");
const http = require("http");

const myurl = new URL("http://localhost:8000/age?year=1998&month=11&date=23&name=John")




let birthYear =myurl.searchParams.get("year")
let birthMonth= myurl.searchParams.get("month")
let birthDay =myurl.searchParams.get("date");
let name = myurl.searchParams.get("name")


const dateString =`${birthMonth}/${birthDay}/${birthYear}`;



var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
        console.log(age);
    }
   

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>Hello ${name}</h1>`)
        res.write(`<p>you are currently  ${age} year old</p>`)
        res.end();
    
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("404 page is not available");
    }
})
server.listen(8000,()=>{
    console.log("server is running port no 8000");
})
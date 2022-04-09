const http =require("http");
const fs =require("fs");


const  data1=
{

"result": {

"rootVegetables": [ "turnips",

"ginger",

"beets"

],

"leafyVegetables": [ "broccoli",

"spinach",

"cabbage"

]

}

}




fs.writeFile("json1.json",data1,(err)=>{
    console.log(err);
})
 


const server =http.createServer((req,res)=>{

  const data =  fs.readFile("json1.json","utf-8")
        orgData = JSON.parse(data.toString());
       

   if (req.url=="/"){
       
   
      
       
       res.end(`${data}`);
       console.log(`${data}`)
   
     



   }else{
       res.end("404 page not found");
   }



})
server.listen(5000,()=>{
    console.log("server is runnig on 5000 port");
})